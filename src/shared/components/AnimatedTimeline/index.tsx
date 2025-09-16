'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { timelineData } from './data';
import styles from './AnimatedTimeline.module.scss';

const AnimatedTimeline: React.FC<{ t: any }> = ({ t }) => {
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateConnectorHeights = () => {
    connectorRefs.current.forEach((connector, i) => {
      if (connector && contentRefs.current[i]) {
        const contentHeight = contentRefs.current[i]!.offsetHeight;
        connector.style.height = `${contentHeight + 10}px`;
      }
    });
  };

  useEffect(() => {
    if (!timelineRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleItems(1);
          const timers: NodeJS.Timeout[] = [];

          for (let i = 1; i < timelineData.length; i++) {
            const timer = setTimeout(() => {
              setVisibleItems((prev) => Math.max(prev, i + 1));
              updateConnectorHeights();
            }, i * 600);
            timers.push(timer);
          }

          observer.disconnect();
          return () => {
            timers.forEach((timer) => clearTimeout(timer));
          };
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(timelineRef.current);

    window.addEventListener('resize', updateConnectorHeights);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateConnectorHeights);
    };
  }, []);

  return (
    <div className={styles.timeline} ref={timelineRef}>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`${styles.timelineItem} ${index < visibleItems ? styles.visible : ''}`}
        >
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <Image
                height={54}
                width={54}
                src={item.icon}
                alt={item.title}
                className={styles.iconImage}
              />
            </div>
            {index < timelineData.length - 1 && (
              <div
                ref={(el) => {
                  connectorRefs.current[index] = el;
                }}
                className={`${styles.connector} ${
                  index < visibleItems - 1 ? styles.connectorVisible : ''
                }`}
              />
            )}
          </div>
          <div
            className={styles.content}
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
          >
            <span className={styles.title}>{t(item.title)}</span>
            <p className={styles.description}>{t(item.description)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTimeline;
