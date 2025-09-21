import { BreadCrumb } from "@/shared/components";
import { Urls } from "@/shared/constants/urls";
import Product from "../Home/components/Product";
import { getTranslations } from "next-intl/server";

const Products = async () => {

const t = await getTranslations("Header")
  return (
    <section>
      <BreadCrumb
        items={[
          { label: t("home"), href: Urls.HOME },
          { label: t("products"), href: Urls.PRODUCTS },
        ]}
      />
      <Product  />
    </section>
  );
};

export default Products;
