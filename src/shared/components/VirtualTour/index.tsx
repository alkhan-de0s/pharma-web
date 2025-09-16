"use client";

import { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import RenderIf from "../RenderIf";
import { IVideoTourItem, IVideoTourProps } from "./model";
import styles from "./VideoTour.module.scss";
import { AnimatedBackground, ThumbnailGallery } from "../index";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { BonusArea } from "@/modules/Halls/model";
import { isVideoTourItem } from "@/shared/helper/bonusAreaChecker";

export default function VideoTour<T extends IVideoTourItem | BonusArea>({
  tours,
  className,
  galleryTitle,
  type,
}: IVideoTourProps<T>) {
  const [activeTab, setActiveTab] = useState<number>(tours?.[0]?.id as number);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const activeTour = tours?.find((t) => t.id === activeTab) as T;

  return (
    <div className={`${styles.videoTour} ${className || ""}`}>
      <AnimatedBackground />
      <Container>
        <p className={styles.Title}>{galleryTitle}</p>
        <div className={styles.layout}>
          <nav className={styles.navigation}>
            <ul className={styles.tabList}>
              {tours?.map((tour) => (
                <li key={tour.id} className={styles.tabItem}>
                  <button
                    className={`${styles.tabButton} ${
                      tour?.id === activeTab ? styles.active : ""
                    }`}
                    onClick={() => handleTabClick(tour?.id)}
                    aria-selected={tour?.id === activeTab}
                    role="tab"
                  >
                    {tour.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.content}>
            {type === "video" && isVideoTourItem(activeTour) && (
              <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                  <Image
                    src={getImageUrl(activeTour?.imagePath) ?? "/slider_bg.webp"}
                    alt="POSTER"
                    className={styles.thumbnail}
                    fill
                  />

                  {!isPlaying && (
                    <button
                      className={styles.playButton}
                      onClick={handlePlayClick}
                      aria-label={`Play ${activeTour.name} video`}
                    >
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.33997 1.26921C5.35392 1.27851 5.36791 1.28784 5.38194 1.2972L17.6888 9.50176C18.0449 9.73912 18.3751 9.95919 18.6286 10.1637C18.8933 10.3771 19.2052 10.6731 19.3848 11.106C19.6221 11.6783 19.6221 12.3214 19.3848 12.8937C19.2052 13.3266 18.8933 13.6226 18.6286 13.836C18.3751 14.0405 18.0449 14.2606 17.6889 14.4979L5.34001 22.7305C4.90474 23.0207 4.51335 23.2817 4.18124 23.4616C3.8489 23.6417 3.39272 23.8476 2.86028 23.8158C2.17924 23.7751 1.55011 23.4384 1.1385 22.8943C0.816703 22.4689 0.734907 21.9752 0.700416 21.5988C0.665951 21.2226 0.665983 20.7522 0.666018 20.2291L0.66602 3.82109C0.66602 3.80422 0.666019 3.7874 0.666018 3.77063C0.665983 3.24751 0.665951 2.77711 0.700416 2.40095C0.734907 2.02452 0.816703 1.53079 1.1385 1.10541C1.55011 0.561302 2.17924 0.224602 2.86028 0.183938C3.39272 0.152147 3.8489 0.35796 4.18124 0.538069C4.51334 0.718047 4.90472 0.979004 5.33997 1.26921Z"
                          fill="#121212"
                        />
                      </svg>
                    </button>
                  )}

                  {isPlaying && activeTour.videoPath && (
                    <video
                      className={styles.video}
                      controls
                      autoPlay
                      src={getImageUrl(activeTour.videoPath)}
                      onEnded={() => setIsPlaying(false)}
                      poster="/slider_bg.webp"
                    />
                  )}
                </div>
              </div>
            )}

            {type === "image" && !isVideoTourItem(activeTour) && (
              <ThumbnailGallery images={activeTour.bonusAreaImages} />
            )}

            <div className={styles.details}>
              <h2 className={styles.title}>{activeTour.name}</h2>
              <p className={styles.description}>{activeTour.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
