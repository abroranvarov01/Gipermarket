import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleCatalog = (name) => {
  return useQuery({
    queryKey: [`Catalog${name}`],
    queryFn: () => request.get(`/${name}`).then((res) => res.data),
  });
};
