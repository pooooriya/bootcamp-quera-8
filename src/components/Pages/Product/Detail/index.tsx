import { Button, Stack, Typography } from "@mui/material";
import { Layout } from "components/Layout";
import { AppContext } from "context/store";
import Image from "next/image";
import React, { useContext } from "react";
import { IProductDetail } from "types/api.types";

export const ProductDetail: React.FunctionComponent<IProductDetail> = ({
  id,
  image,
  title,
  description,
  price,
}): JSX.Element => {
  const { Checkout, setCheckout } = useContext(AppContext);
  const handleClick = () => {
    const perv = Checkout.find((x) => x.id == id);
    if (!perv) {
      const product: Partial<IProductDetail> & { count: number } = {
        id,
        image,
        title,
        price,
        count: 1,
      };
      setCheckout([...Checkout, product]);
    } else {
      const newCheckout = Checkout.filter((x) => x.id != id);
      perv.count = perv.count + 1;
      newCheckout.push(perv);
      setCheckout(newCheckout);
    }
  };
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
        <Stack>
          <Button onClick={handleClick}>Add To Card</Button>
        </Stack>
      </Stack>
    </Layout>
  );
};
