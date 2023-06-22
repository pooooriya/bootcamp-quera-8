import { useQuery } from "react-query";
import { CacheKeys } from "services/cacheKeys";
import { Fetcher } from "config/axios";
import { ApiRoutes } from "constants/api.routes";

const useProductDetail = (id: number) => {
  return useQuery<any, any, string[], any>(
    [CacheKeys.GetProductDetail, id],
    () =>
      Fetcher.get(
        ApiRoutes.productDetail.replace("{:productId}", id.toString())
      ).then((res) => res.data),
    {
      enabled: !id,
    }
  );
};

export default useProductDetail;
