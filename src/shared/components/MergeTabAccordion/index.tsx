"use client";
import { FaqSectionResponse } from "@/modules/Faq/model";
import React, { useState } from "react";
import Accordion from "../Accordion";
import Container from "../Container";
import styles from "./TabAccordion.module.scss";

interface IFaqProps {
  sections: FaqSectionResponse["data"] | undefined;
  arrowColor: string;
}
const TabAndAccordion: React.FC<IFaqProps> = ({ sections, arrowColor }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div
      style={{ background: sections?.[activeTab]?.color }}
      className={styles.TabAccordion}
    >
      <Container>
        <div className={styles.layout}>
          <nav className={styles.navigation}>
            <ul className={styles.tabList}>
              {sections?.map((tour, index) => (
                <li key={tour.id} className={styles.tabItem}>
                  <button
                    className={`${styles.tabButton} ${
                      index === activeTab ? styles.active : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                    aria-selected={index === activeTab}
                    role="tab"
                  >
                    {tour.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.Accordion}>
            <Accordion
              arrowColor={arrowColor}
              borderColor="rgba(255,255,255,0.5)"
              color="#FFFFFF"
              items={sections?.[activeTab]?.faqItems.map((item) => ({
                id: item.id.toString(),
                content: item.content,
                header: item.header,
              }))}
              getTitle={(item) => item.header}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TabAndAccordion;
