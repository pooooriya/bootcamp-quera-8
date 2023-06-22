import { Typography } from "@mui/material";
import Image from "next/image";
import { Product } from "types/api.types";

export const Card: React.FC<Product> = ({
  title,
  price,
  image,
}): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-200 rounded-md cursor-pointer">
      <div className="relative aspect-square w-[180px]">
        <Image alt={title} layout="fill" src={image} />
      </div>
      <Typography variant="subtitle1" fontWeight={700}>
        {title.length > 20 ? title.substring(0, 20) + "..." : title}
      </Typography>
      <Typography variant="subtitle2">{price}هزارتومان</Typography>
    </div>
  );
};
