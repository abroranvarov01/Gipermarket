import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetCatalog = () => {
  return useQuery({
    queryKey: ["catalog"],
    queryFn: () => request.get("/catalog").then((res) => res.data),
  });
};
