
"use client";

import { useEffect, useState, useRef } from "react";

type AnimatedCounterProps = {
  targetValue: number;
  duration?: number;
  className?: string;
  decimals?: number;
};

export function AnimatedCounter({
  targetValue,
  duration = 2000,
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const stepTime = 50; // update every 50ms
  const steps = duration / stepTime;
  const increment = targetValue / steps;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
              clearInterval(timer);
              setCurrentValue(targetValue);
            } else {
              setCurrentValue(current);
            }
          }, stepTime);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [targetValue, duration, increment, stepTime]);

  return (
    <span ref={elementRef} className={className}>
      {currentValue.toFixed(decimals)}
    </span>
  );
}
