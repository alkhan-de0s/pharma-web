'use client';
import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.scss';

const blobConfigs = [
  { color: '#403277', opacity: 0.4 },
  { color: '#83139E', opacity: 0.35 },
  { color: '#6451B8', opacity: 0.3 },
  { color: '#483D8B', opacity: 0.4 },
  { color: '#9C5091', opacity: 0.25 },
  { color: '#8A2BE2', opacity: 0.2 }
];

const MAX_BLOBS = 45;
const INTERVAL_MS = 300;

export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  let configIndex = 0;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shuffleArray = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    shuffleArray(blobConfigs);

    const createBlob = (initial = false) => {
      if (!container || container.children.length >= MAX_BLOBS) return;

      const blob = document.createElement('div');
      blob.classList.add(styles.blob);

      const config = blobConfigs[configIndex];
      configIndex = (configIndex + 1) % blobConfigs.length;
      if (configIndex === 0) shuffleArray(blobConfigs);

      blob.style.backgroundColor = config.color;
      blob.style.opacity = `${config.opacity}`;
      blob.style.filter = 'blur(110px)';

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const size = Math.random() * 400 + 300;
      const duration = Math.random() * 3000 + 2000;

      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;

      const startX = initial
        ? Math.random() * vw
        : Math.random() < 0.5 ? -size : vw;
      const startY = initial
        ? Math.random() * vh
        : Math.random() * vh;

      const endX = startX < 0 ? vw : -size;
      const endY = startY + (Math.random() * 0.4 - 0.2) * vh;

      blob.style.transform = `translate(${startX}px, ${startY}px)`;
      container.appendChild(blob);

      const animation = blob.animate(
        [
          { transform: `translate(${startX}px, ${startY}px)` },
          { transform: `translate(${endX}px, ${endY}px)` }
        ],
        {
          duration,
          easing: 'linear',
          fill: 'forwards'
        }
      );

      animation.onfinish = () => {
        blob.remove();
      };
    };

    for (let i = 0; i < 40; i++) createBlob(true);
    const intervalId = setInterval(() => createBlob(false), INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return <div ref={containerRef} className={styles.aurora} />;
}
