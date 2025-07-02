"use client";
import { ArrowUpRightIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useMouse } from "../cuicui/hooks/use-mouse";
import { cn } from "../utils/cn";

export const GradientCard = ({
  title,
  description,
  withArrow = false,
  circleSize = 400,
  children,
  className,
}: {
  title: string;
  description?: string;
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      ref={parentRef}
      className={cn(
        "group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 px-8 py-6 transition-transform hover:scale-[1.01] text-gray-800",
        className
      )}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute top-2 right-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-300" />
      )}
      <div
        className={cn(
          "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100"
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #F5CAC3, #F5B9A0,#F4A97D,#F4985A)",
        }}
      />
      <div className="relative">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-2xl">{title}</h3>
          {withArrow && (
            <ArrowUpRightIcon className="size-5 text-neutral-700 dark:text-neutral-300" />
          )}
        </div>
        {description && (
          <p className="mt-2 text-base text-neutral-700 dark:text-neutral-300">
            {description}
          </p>
        )}
      </div>

      {children && <div className="relative mt-4">{children}</div>}
    </div>
  );
};
