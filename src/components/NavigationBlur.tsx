import { useEffect, useState } from 'react';

interface NavigationBlurProps {
  height?: number;
  position?: 'top' | 'bottom';
  blurIntensity?: number;
  className?: string;
}

export const NavigationBlur = ({
  height = 120,
  position = 'top',
  blurIntensity = 12,
  className = ''
}: NavigationBlurProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Calculate blur intensity based on scroll position
  const blurAmount = Math.min((scrollY / 100) * blurIntensity, blurIntensity);
  const opacity = Math.min(scrollY / 100, 0.95);

  const positionClasses = position === 'top'
    ? 'top-0'
    : 'bottom-0';

  const gradientDirection = position === 'top'
    ? 'bg-gradient-to-b'
    : 'bg-gradient-to-t';

  return (
    <div
      className={`fixed left-0 right-0 z-40 pointer-events-none transition-all duration-300 ${positionClasses} ${className}`}
      style={{
        height: `${height}px`,
        backdropFilter: scrollY > 20 ? `blur(${blurAmount}px)` : 'none',
        WebkitBackdropFilter: scrollY > 20 ? `blur(${blurAmount}px)` : 'none',
      }}
    >
      {/* Gradient overlay to blend the blur effect */}
      <div
        className={`w-full h-full ${gradientDirection} transition-opacity duration-300`}
        style={{
          background: position === 'top'
            ? `linear-gradient(to bottom, rgba(var(--color-bg-rgb, 247, 237, 226), ${opacity * 0.4}) 0%, rgba(var(--color-bg-rgb, 247, 237, 226), ${opacity * 0.2}) 50%, transparent 100%)`
            : `linear-gradient(to top, rgba(var(--color-bg-rgb, 247, 237, 226), ${opacity * 0.4}) 0%, rgba(var(--color-bg-rgb, 247, 237, 226), ${opacity * 0.2}) 50%, transparent 100%)`,
          opacity: scrollY > 20 ? 1 : 0,
        }}
      />
    </div>
  );
};