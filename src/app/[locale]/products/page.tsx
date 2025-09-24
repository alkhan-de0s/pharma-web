import { getServerLocale, lang, serverApi } from "@/lib/apiClient";
import Products from "@/modules/Products";
import { ProductDto } from "@/modules/Products/model";
import React from "react";

const Index = async (props: {
  searchParams?: Promise<{
    search?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;

  const locale = await getServerLocale();

  const data = await serverApi.get<ProductDto[]>(
    `products?languageId=${lang[locale as keyof typeof lang] ?? 1}&search=${
      searchParams?.search ?? ""
    }`
  );

  return <Products data={data} />;
};

export default Index;
