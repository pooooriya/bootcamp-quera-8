import { Typography } from "@mui/material";
import Image from "next/image";
import { Product } from "types/api.types";

export const Card: React.FC<Product> = ({ title, price }): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-200 rounded-md cursor-pointer">
      <div className="relative aspect-square w-[180px]">
        <Image
          alt="تست"
          layout="fill"
          src="https://dkstatics-public.digikala.com/digikala-products/72bb99c5acc1b904f3c820ea925af5a8efd8f6ff_1594220459.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        />
      </div>
      <Typography variant="subtitle1" fontWeight={700}>
        {title.length > 20 ? title.substring(0, 20) + "..." : title}
      </Typography>
      <Typography variant="subtitle2">{price}هزارتومان</Typography>
    </div>
  );
};
