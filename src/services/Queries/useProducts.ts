import { useQuery } from "react-query";
import { CacheKeys } from "services/cacheKeys";
import { Fetcher } from "config/axios";
import { ApiRoutes } from "constants/api.routes";
import { Product } from "types/api.types";

const UseProducts = () => {
  return useQuery<any, any, Product[], any>(CacheKeys.GetAllProducts, () =>
    Fetcher.get(ApiRoutes.products).then((res) => res.data)
  );
};

export default UseProducts;
