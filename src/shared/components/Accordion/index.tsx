"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import RenderIf from "../RenderIf";
import { Minus, Plus } from "@/shared/icons";

interface AccordionItemBase {
  id: string;
  content: string;
}

interface AccordionProps<T extends AccordionItemBase> {
  items: T[] | undefined;
  color?: string;
  borderColor?: string;
  title?: string;
  getTitle: (item: T) => string;
  arrowColor : string
}

const Accordion = <T extends AccordionItemBase>({
  items,
  color,
  borderColor,
  title,
  getTitle,
  arrowColor
}: AccordionProps<T>) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div
      style={
        {
          "--main-color": color,
          "--border-color": borderColor,
        } as React.CSSProperties
      }
      className={styles.accordion}
    >
      <RenderIf condition={title}>
        <p className={styles.mainTitle}>{title}</p>
      </RenderIf>

      {items?.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.accordionItem} ${
            index === items.length - 1 ? styles.lastItem : ""
          }`}
        >
          <button
            className={styles.accordionHeader}
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItems.has(item.id)}
          >
            <span className={styles.title}>{getTitle(item)}</span>
            <div className={styles.icon}>
              <RenderIf condition={!openItems.has(item.id)}>
                <Plus arrowColor={arrowColor}  />
              </RenderIf>
               <RenderIf condition={openItems.has(item.id)}>
                <Minus arrowColor={arrowColor}   />
              </RenderIf>
            </div>
          </button>

          <div
            className={`${styles.accordionContent} ${
              openItems.has(item.id) ? styles.open : ""
            }`}
          >
            <div className={styles.contentInner}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
