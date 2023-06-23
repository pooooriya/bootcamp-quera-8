import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { AppContext } from "context/store";
import Image from "next/image";
import React, { useContext } from "react";

interface IBasketProps {}
export const Basket: React.FC<IBasketProps> = (): JSX.Element => {
  const { Checkout } = useContext(AppContext);
  return (
    <Stack
      position="absolute"
      top={30}
      right={0}
      py={2}
      px={3}
      width={300}
      height={300}
      sx={{
        bgcolor: "#dfdfdf",
        zIndex: 1000,
        overflow: "auto",
      }}
    >
      <Typography variant="subtitle1" fontWeight={700} textAlign="center">
        سبد خرید شما
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {Checkout?.map((item, index) => (
          <ListItem key={index}>
            <Stack>
              <Image src={item.image} width={50} height={50} alt={item.title} />
            </Stack>
            <Stack p={3}>
              <Stack>
                <Typography>{item.title}</Typography>
                <Typography>{`تعداد خریداری شده : ${item.count}`}</Typography>
                <Typography>{`قیمت نهایی این کالا: ${
                  item.price * item.count
                }`}</Typography>
              </Stack>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
// id,
// image,
// title,
// price,
// count: 1,
