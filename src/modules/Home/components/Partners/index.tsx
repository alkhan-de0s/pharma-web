"use client";

import React, { useEffect, useRef, useState } from "react";
import { stats } from "./data";
import { useTranslations } from "next-intl";

export default function StatCards() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const t = useTranslations("HomePage");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const range = (n: number) => Array.from({ length: n }, (_, i) => i);

  return (
    <section ref={sectionRef} className="p-4 container">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {stats.map((s, idx) => (
          <article
            key={s.id}
            className={`group relative rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out flex flex-col justify-between text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
            aria-labelledby={`stat-${s.id}-label`}
          >
            <div>
              <div className="stat-number text-3xl font-extrabold leading-none tracking-tight">
                <div
                  className={`number-viewport inline-block align-top ${
                    visible ? "animate-countup" : ""
                  }`}
                  style={
                    {
                      ["--count" as any]: `${s.target}`,
                      ["--duration" as any]: s.duration ?? "2s",
                      ["--delay" as any]: `${s.delay ?? idx * 120}ms`,
                    } as React.CSSProperties
                  }
                >
                  <ol className="numbers m-0 p-0 list-none">
                    {range(s.target).map((n) => (
                      <li key={n} className="h-[2.25rem] leading-[2.25rem]">
                        {n}
                      </li>
                    ))}
                    <li className="h-[2.25rem] leading-[2.25rem]">
                      {s.target}
                      {s.suffix ?? ""}
                    </li>
                  </ol>
                </div>
              </div>

              <p id={`stat-${s.id}-label`} className="mt-2 text-sm font-medium">
                {t(s.label)}
              </p>
            </div>

            <div className="mt-4 flex items-center text-sm opacity-90">
              <span>{t(s.hint)}</span>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .number-viewport { 
          --step: 2.25rem; 
          height: var(--step); 
          overflow: hidden; 
        }
        
        .numbers { 
          margin: 0; 
          padding: 0; 
          list-style: none; 
          transform: translateY(0); 
        }
        
        .numbers li { 
          height: var(--step); 
          display: flex; 
          align-items: center; 
        }

        .animate-countup .numbers {
          animation-name: stat-countup;
          animation-duration: var(--duration, 2s);
          animation-delay: var(--delay, 0s);
          animation-timing-function: cubic-bezier(.22,1,.36,1);
          animation-fill-mode: forwards;
        }

        @keyframes stat-countup {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-1 * var(--count) * var(--step))); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-countup .numbers { 
            animation: none; 
            transform: translateY(calc(-1 * var(--count) * var(--step))); 
          }
        }
      `}</style>
    </section>
  );
}
