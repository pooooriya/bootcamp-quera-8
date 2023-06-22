import { Stack, Typography } from "@mui/material";
import { Layout } from "components/Layout";
import Image from "next/image";
import React from "react";
import { IProductDetail } from "types/api.types";

export const ProductDetail: React.FunctionComponent<IProductDetail> = ({
  id,
  image,
  title,
  description,
  price,
  rating,
}): JSX.Element => {
  return (
    <Layout>
      <Stack justifyContent="center" alignItems="center" spacing={3}>
        <Stack>
          <Image src={image} alt={title} width={200} height={200} />
        </Stack>
        <Stack>
          <Typography>{title}</Typography>
        </Stack>
        <Stack>
          <Typography>{description}</Typography>
        </Stack>
        <Stack>
          <Typography>{price}</Typography>
        </Stack>
      </Stack>
    </Layout>
  );
};
