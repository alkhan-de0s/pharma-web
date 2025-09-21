import { Link } from "@/i18n/navigation";
import { getServerLocale, lang, serverApi } from "@/lib/apiClient";
import { ProductDto } from "@/modules/Products/model";
import { Container } from "@/shared/components";
import { Urls } from "@/shared/constants/urls";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const Product: React.FC = async () => {
  const locale = await getServerLocale();
  const t = await getTranslations("Header");

  const data = await serverApi.get<ProductDto[]>(
    `products?languageId=${lang[locale as keyof typeof lang] ?? 1}`
  );
  return (
    <section className="py-[30px] mt-5">
      <Container>
        <p className="text-[#12b48b] text-2xl lg:text-4xl mb-5">
          {t("products")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {data?.map((product) => (
            <div key={product.id} className="relative mb-10 text-center group">
              <div className="relative rounded-md overflow-hidden h-[300px]">
                <Image
                  src={product.coverImage}
                  alt="PRODUCT"
                  className="object-cover"
                  fill
                />
              </div>

              <div className="absolute left-0 right-0 -bottom-12 bg-white mx-5 rounded-md shadow-md pt-4 pb-2   group-hover:-translate-y-6 transition-all duration-300 ease-in-out">
                <Link
                  href={`${Urls.PRODUCTS}/${product.id}`}
                  className="no-underline text-teal-600 transition-colors duration-300 ease-in-out hover:text-teal-700"
                >
                  <h4 className="font-bold text-lg">
                    {product?.translations?.[0].name}
                  </h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Product;
