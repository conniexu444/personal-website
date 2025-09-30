import { useEffect, useState, memo, useCallback } from 'react';

export const Clock = memo(() => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = useCallback((date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 text-neutral-900 dark:text-neutral-100 font-sans">
      <div className="text-xs opacity-60 tabular-nums">
        {formatTime(time)}
      </div>
    </div>
  );
});

Clock.displayName = 'Clock';