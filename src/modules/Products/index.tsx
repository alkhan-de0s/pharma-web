import React from 'react'
import Product from '../Home/components/Product'
import { useTranslations } from 'next-intl';
import { BreadCrumb } from '@/shared/components';
import { Urls } from '@/shared/constants/urls';

const Products = () => {
     const t = useTranslations("Header");

  return (
    <section>
        <BreadCrumb
        items={[
          { label: t("home"), href: Urls.HOME },
          { label: t("products"), href: Urls.PRODUCTS },
        ]}
      />
        <Product/>
    </section>
  )
}

export default Products