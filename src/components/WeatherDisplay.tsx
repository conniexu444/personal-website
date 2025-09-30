import { memo } from 'react';
import { useWeather } from '../hooks/useWeather';

export const WeatherDisplay = memo(() => {
  const { weather, loading, error } = useWeather();

  if (loading || error || !weather) return null;

  return (
    <div className="fixed top-4 left-4 z-50 text-neutral-900 dark:text-neutral-100 font-sans">
      <div className="flex items-baseline gap-1.5">
        <span className="text-xs opacity-60">{weather.temperature}°</span>
        <span className="text-xs opacity-60">{weather.location}</span>
      </div>
    </div>
  );
});

WeatherDisplay.displayName = 'WeatherDisplay';