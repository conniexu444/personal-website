import { useEffect, useState, useRef } from 'react';

interface WeatherData {
  temperature: number;
  location: string;
}

export const useWeather = (refreshInterval = 20 * 60 * 1000) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        const [weatherResponse, geoResponse] = await Promise.all([
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&temperature_unit=fahrenheit`,
            { signal: abortControllerRef.current.signal }
          ),
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
            { signal: abortControllerRef.current.signal }
          )
        ]);

        if (!weatherResponse.ok || !geoResponse.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const [weatherData, geoData] = await Promise.all([
          weatherResponse.json(),
          geoResponse.json()
        ]);

        setWeather({
          temperature: Math.round(weatherData.current.temperature_2m),
          location: geoData.city || geoData.locality || 'Unknown'
        });
        setError(false);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }
        console.error('Error fetching weather:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const fetchWeatherWithLocation = () => {
      if (!navigator.geolocation) {
        setError(true);
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.error('Error getting location:', err);
          setError(true);
          setLoading(false);
        }
      );
    };

    fetchWeatherWithLocation();
    const interval = setInterval(fetchWeatherWithLocation, refreshInterval);

    return () => {
      clearInterval(interval);
      abortControllerRef.current?.abort();
    };
  }, [refreshInterval]);

  return { weather, loading, error };
};