import { useEffect, useState } from 'react';

interface WeatherData {
  temperature: number;
  location: string;
}

export const WeatherDisplay = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getWeather = async (lat: number, lon: number) => {
      try {
        // Using Open-Meteo API (free, no API key required)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&temperature_unit=fahrenheit`
        );
        const data = await response.json();

        // Get location name using reverse geocoding
        const geoResponse = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
        );
        const geoData = await geoResponse.json();

        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          location: geoData.city || geoData.locality || 'Unknown'
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError(true);
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.error('Error getting location:', err);
          setError(true);
          setLoading(false);
        }
      );
    } else {
      setError(true);
      setLoading(false);
    }
  }, []);

  if (loading) return null;
  if (error) return null;
  if (!weather) return null;

  return (
    <div className="fixed top-4 left-4 z-50 text-[var(--color-text)] font-[var(--font-body)]">
      <div className="flex items-baseline gap-1.5">
        <span className="text-xs opacity-60">{weather.temperature}°</span>
        <span className="text-xs opacity-60">{weather.location}</span>
      </div>
    </div>
  );
};