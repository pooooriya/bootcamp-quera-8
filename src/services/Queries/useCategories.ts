import { useQuery } from "react-query";
import { CacheKeys } from "services/cacheKeys";
import { Fetcher } from "config/axios";
import { ApiRoutes } from "constants/api.routes";

const UseCategories = () => {
  return useQuery<any, any, string[], any>(CacheKeys.GetAllCategories, () =>
    Fetcher.get(ApiRoutes.categories).then((res) => res.data)
  );
};

export default UseCategories;
