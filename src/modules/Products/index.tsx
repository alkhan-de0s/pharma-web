import { BreadCrumb, Container } from "@/shared/components";
import { Urls } from "@/shared/constants/urls";
import Product from "../Home/components/Product";
import { getTranslations } from "next-intl/server";
import Search from "@/shared/components/Search";
import { ProductDto } from "./model";
interface ProductPage {
  data?: ProductDto[];
}
const Products = async ({ data }: ProductPage) => {
  const t = await getTranslations("Header");
  return (
    <section>
      <BreadCrumb
        items={[
          { label: t("home"), href: Urls.HOME },
          { label: t("products"), href: Urls.PRODUCTS },
        ]}
      />
      <Container classname="mt-[40px]!">
        <Search placeholder="Axtar" />
      </Container>

      <Product data={data} />
    </section>
  );
};

export default Products;
