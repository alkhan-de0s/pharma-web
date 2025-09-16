import React from 'react';


export default function FullscreenSpinner({ message = 'Loading...', bgBlur = true }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        bgBlur ? 'backdrop-blur-sm bg-black/30' : 'bg-black/40'
      }`}
    >
      <div className="flex flex-col items-center gap-4 p-6 rounded-2xl">
        <div className="relative w-36 h-36">
          <svg
            className="w-full h-full animate-spin"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="5"
            />
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="31.4 94.2" 
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-semibold">100%</div>
            <div className="text-sm opacity-80">{message}</div>
          </div>
        </div>

      
        <span className="sr-only">Loading complate — 100 %</span>
      </div>
    </div>
  );
}
