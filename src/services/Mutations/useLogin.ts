import { Fetcher } from "config/axios";
import { ApiRoutes } from "constants/api.routes";
import { useMutation } from "react-query";
import { CacheKeys } from "services/cacheKeys";

const UseLogin = () => {
  return useMutation(
    ({ username, password }: any) =>
      Fetcher.post(ApiRoutes.login, { username, password }).then(
        (res) => res.data
      ),
    {
      mutationKey: CacheKeys.Login,
    }
  );
};

export default UseLogin;
