"use client";
import { useApiQuery } from "@/hooks/useApiQuery";
import { formatDate } from "@/shared/helper/formatDate";
import { getImageUrl } from "@/shared/helper/getImageUrl";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import styles from "./Highlight.module.scss";
import HighlightCard from "./HighLigtCard";
import { CategoryResponse, HighlightEventsResponse } from "./models";
import { useLocale } from "next-intl";
import {classes} from './data'

const Highlights = () => {
  const locale = useLocale()
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data } = useApiQuery<CategoryResponse>("/eventCategories");
  const tabs = data?.data || [];

  const tabFromUrl = searchParams.get("tab");
  const initialTabId = React.useMemo(() => {
    const matched = tabs.find((tab) => String(tab.id) === tabFromUrl);
    return matched?.id ?? tabs[0]?.id;
  }, [tabFromUrl, tabs]);

  const [activeTab, setActiveTab] = React.useState<number | undefined>(
    initialTabId
  );

  React.useEffect(() => {
    setActiveTab(initialTabId);
  }, [initialTabId]);

  const handleTabClick = (id: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", String(id));
    router.push(`?${params.toString()}`, { scroll: false });
    setActiveTab(id);
  };
  const { data: events } = useApiQuery<HighlightEventsResponse>("/events", {
    enabled: Boolean(activeTab),
    params: {
      categoryId: activeTab,
      isMemory: false,
    },
  });

  return (
    <section className={styles.Highlights}>
      <ul className={styles.HighlightsTabs}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`${activeTab === tab.id ? styles.Active : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div className={styles.HighlightsView}>
        {events?.data
          .map((card, index) => (
            <HighlightCard
              titleId={card.id}
              key={index}
              date={formatDate(card.date,locale)}
              title={card.title}
              imageSrc={getImageUrl(card.imagePath)}
              backgroundColorClass={card.color}
              textColorClass={card.textColor}
              orderClass={styles[classes[index]]}
            />
          ))}
      </div>
    </section>
  );
};

export default Highlights;
