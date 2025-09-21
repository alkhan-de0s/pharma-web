"use client";
import React from "react";
import { ProductDto } from "../model";
import { Container, RenderIf, ThumbnailSwiper } from "@/shared/components";
interface IPropsProduct {
  data: ProductDto;
}
const SingleProduct = ({ data }: IPropsProduct) => {
  return (
    <main className="pb-[50px]"> 
      <RenderIf condition={data.gallery.length > 0}>
        <Container>
          <ThumbnailSwiper images={data.gallery} description={data?.translations?.[0]?.description} name={data.translations?.[0].name} />


        </Container>
      </RenderIf>
    </main>
  );
};

export default SingleProduct;
