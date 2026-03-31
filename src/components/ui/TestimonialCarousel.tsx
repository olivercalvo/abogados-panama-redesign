"use client";

import { useState, useEffect, useCallback } from "react";
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
  interval = 4500,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [paused, next, interval]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Testimonios con transición fade */}
      <div className="relative min-h-[120px]">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="absolute inset-0 transition-all duration-500 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "translateY(0)" : "translateY(8px)",
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-2 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className="fill-brand text-brand"
                  />
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

      {/* Dots indicadores */}
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
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
