import React from "react";
import { NextPage, NextPageContext } from "next";
import { ProductDetail } from "components/Pages";
import { Fetcher } from "config/axios";
import { ApiRoutes } from "constants/api.routes";
import { IProductDetail } from "types/api.types";

interface IProductDetailPageProps {
  product: IProductDetail;
}
const ProductDetailPage: NextPage<IProductDetailPageProps> = ({
  product,
}): JSX.Element => {
  return <ProductDetail {...product} />;
};

export default ProductDetailPage;

export async function getServerSideProps(ctx: NextPageContext) {
  try {
    const query = ctx.query;
    const response = await Fetcher.get(
      ApiRoutes.productDetail.replace("{:productId}", query.id as any)
    ).then((res) => res.data);
    return {
      props: {
        product: response || null,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
