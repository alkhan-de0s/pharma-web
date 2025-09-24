import React from "react";
import Cards from "./components/Cards";
import Slider from "./components/Slider";
import HeroUI from "./components/HeroSection";
import Product from "./components/Product";
import {Contact, Container, RenderIf} from "@/shared/components";
import Partners from "./components/Partners";
import { fetchProducts } from "@/lib/serverQueries";
import {getServerLocale, lang} from "@/lib/apiClient";
import { Link } from "@/i18n/navigation";
import { Urls } from "@/shared/constants/urls";
import { getTranslations } from "next-intl/server";
const Home = async() => {
  const locale = await getServerLocale();
  const t = await getTranslations("HomePage");
  const {results:{products}} = await fetchProducts(lang[locale as keyof typeof lang] ?? 1);

  return (
    <main>
      <Slider />
      <Cards />
      <HeroUI key="HOME" heroDescFirstTitle="interesting-fact-text-first" heroDescSecondTitle="interesting-fact-text-second" heroDescThirdTitle="interesting-fact-text-third" heroTitle="interesting-fact" imagePath="/general/doctor.webp" />
      <RenderIf condition={products?.data?.length! > 0}>
        <Product data={products?.data?.slice(0,4)?.sort(()=>Math.random()- 0.5)} />
        <Container>
          <Link href={Urls.PRODUCTS} className="bg-[#61ce70]! inline-block mt-10 text-white rounded-md hover:bg-violet-600! duration-300 ease-in p-3 ">
          {t("view-all-products")}
          <span className="ml-2 text-white transform rotate-0 hover:rotate-90 transition-transform duration-300 ease-in-out">
            →
          </span>
        </Link>
        </Container>
      </RenderIf>
      <Contact/>
      <Partners/>
    </main>
  );
};

export default Home;
