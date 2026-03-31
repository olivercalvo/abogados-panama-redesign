"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  interval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  interval = 5000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const paused = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      if (sliding || index === current) return;
      setSliding(true);

      // After transition ends, commit the new index
      setTimeout(() => {
        setCurrent(index);
        setSliding(false);
      }, 650);
    },
    [sliding, current, testimonials.length]
  );

  const next = useCallback(() => {
    const nextIndex = (current + 1) % testimonials.length;
    goTo(nextIndex);
  }, [current, testimonials.length, goTo]);

  useEffect(() => {
    if (paused.current) return;
    const timer = setInterval(() => {
      if (!paused.current) next();
    }, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  const nextIndex = (current + 1) % testimonials.length;

  function getSlideStyle(i: number): React.CSSProperties {
    // Current slide
    if (i === current) {
      return {
        transform: sliding ? "translateX(-110%)" : "translateX(0)",
        opacity: sliding ? 0 : 1,
        transition: sliding ? "transform 650ms ease-in-out, opacity 650ms ease-in-out" : "none",
        position: sliding ? "absolute" : "relative",
        inset: sliding ? 0 : undefined,
        zIndex: 1,
      };
    }

    // Next slide (entering from right)
    if (i === nextIndex && sliding) {
      return {
        transform: "translateX(0)",
        opacity: 1,
        transition: "transform 650ms ease-in-out, opacity 650ms ease-in-out",
        position: "absolute",
        inset: 0,
        zIndex: 2,
      };
    }

    // Next slide (waiting off-screen right, not sliding)
    if (i === nextIndex && !sliding) {
      return {
        transform: "translateX(110%)",
        opacity: 0,
        transition: "none",
        position: "absolute",
        inset: 0,
        zIndex: 0,
      };
    }

    // All others hidden
    return {
      transform: "translateX(110%)",
      opacity: 0,
      transition: "none",
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  }

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* Slide container */}
      <div className="relative overflow-hidden min-h-[130px]">
        {testimonials.map((t, i) => (
          <div key={t.name} style={getSlideStyle(i)}>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-2 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="fill-brand text-brand" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-brand">
                — {t.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Testimonio ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "w-6 bg-brand"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
