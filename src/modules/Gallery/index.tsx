import React from 'react'
import { ImageCarousel } from '@/shared/components';
import Breadcrumb from '@/shared/components/BreadCrumb';
import { Urls } from '@/shared/constants/urls';
import { useTranslations } from 'next-intl';

const Gallery = () => {
  const t = useTranslations("Header");
  return (
    <main>
       <Breadcrumb
        items={[
          { label: t("home"), href: Urls.HOME },
          { label: t("gallery"), href: Urls.GALLERY },
        ]}
      />
       <ImageCarousel withTitle={false} />
    </main>
  )
}

export default Gallery;