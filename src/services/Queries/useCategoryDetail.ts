import { useQuery } from "react-query";
import { CacheKeys } from "services/cacheKeys";
import { Fetcher } from "config/axios";
import { ApiRoutes } from "constants/api.routes";

const useCategoryDetail = (slug: string) => {
  return useQuery<any, any, string[], any>(
    [CacheKeys.GetCategoryDetail, slug],
    () =>
      Fetcher.get(ApiRoutes.categoryDetail.replace("{:slug}", slug)).then(
        (res) => res.data
      ),
    {
      enabled: Boolean(slug),
    }
  );
};

export default useCategoryDetail;
