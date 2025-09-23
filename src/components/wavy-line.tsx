"use client";
import { cn } from "../utils/cn";
import { useRef, useEffect, useState, useCallback, memo, type ComponentProps } from "react";

interface MouseEvent {
  movementY: number;
  clientX: number;
}

export const WavyLine = memo(function WavyLine({ className, ...props }: ComponentProps<"div">) {
  const path = useRef<SVGPathElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const reqIdRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [x, setX] = useState(0.5);
  const [time, setTime] = useState(Math.PI / 2);

  const setSvgPath = useCallback((currentProgress: number) => {
    const width = parentRef.current?.clientWidth ?? window.innerWidth * 1;

    // Set the "d" attribute of the SVG path element using a quadratic Bézier curve
    path.current?.setAttributeNS(
      null,
      "d",
      `M0 50 Q${width * x} ${50 + currentProgress}, ${width} 50`,
    );
  }, [x]);

  // Use the useEffect hook to set the path on component mount
  useEffect(() => {
    setSvgPath(progress);
  }, [progress, setSvgPath]);


  // Define a linear interpolation function
  const lerp = useCallback((x: number, y: number, a: number) => x * (1 - a) + y * a, []);

  const resetAnimation = useCallback(() => {
    setTime(Math.PI / 2);
    setProgress(0);
  }, []);

  // Define a function to handle mouse enter events
  const handleMouseEnter = useCallback(() => {
    // If there is an animation frame request, cancel it and reset the animation
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      resetAnimation();
    }
  }, [resetAnimation]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Get the movementY and clientX properties from the event object
    const { movementY, clientX } = e;

    // Get the bounding rectangle of the SVG path element
    const pathBound = path.current?.getBoundingClientRect();

    // If the bounding rectangle exists, update x and progress and set the path
    if (pathBound) {
      setX((clientX - pathBound.left) / pathBound.width);
      setProgress(prev => {
        const newProgress = prev + movementY;
        setSvgPath(newProgress);
        return newProgress;
      });
    }
  }, [setSvgPath]);

  const animateOut = useCallback(() => {
    setProgress(currentProgress => {
      setTime(currentTime => {
        // Calculate newProgress using sine of time
        const newProgress = currentProgress * Math.sin(currentTime);

        // Update progress using linear interpolation towards zero
        const updatedProgress = lerp(currentProgress, 0, 0.025);

        // Set the path using newProgress
        setSvgPath(newProgress);

        // If progress is greater than a threshold, request another animation frame,
        // otherwise reset the animation.
        if (Math.abs(updatedProgress) > 0.75) {
          reqIdRef.current = requestAnimationFrame(animateOut);
        } else {
          resetAnimation();
        }

        return currentTime + 0.2;
      });
      return lerp(currentProgress, 0, 0.025);
    });
  }, [lerp, setSvgPath, resetAnimation]);

  const handleMouseLeave = useCallback(() => {
    animateOut();
  }, [animateOut]);

  return (
    <div
      className={cn("relative w-full h-px", className)}
      {...props}
      ref={parentRef}
    >
      <div
        className="relative z-10 h-10 -top-5 w-full"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <svg className="absolute w-full h-[100px] -top-[50px]">
        <title>Wavy Line</title>
        <path
          ref={path}
          className="stroke-current text-[var(--color-text)] stroke-[1px] fill-none"
        />
      </svg>
    </div>
  );
});
