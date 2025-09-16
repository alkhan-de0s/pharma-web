import HomePage from "@/modules/Home";
import { useTranslations } from "next-intl";
import Head from "next/head";
export default function Home() {

  const t = useTranslations("Seo")
  return (
    <>
      <Head>
        <title>{t("medicine")}</title>
        <meta
          name="description"
          content="Проверьте лекарства, такие как iPhone 12 XR Pro и iPhone 12 Pro Max. Посетите местный магазин для получения экспертных консультаций."
          key="desc"
        />
        <meta
          name="keywords"
          content="
          Dexrogen,Дексроген,Декоферин,Dekoferin,Seyodyn,Сейодин,Фолдекс,Foldex,Monozym,Монозим,Комбомаг,Combomag,Aletos forte,Алетос Форте,Беневит,Benevit,Lactosistit,Лактоцистит "
        />
      </Head>

      <HomePage />
    </>
  );
}
