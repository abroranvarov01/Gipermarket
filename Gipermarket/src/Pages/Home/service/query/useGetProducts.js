import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = ({ name }) => {
  return useQuery({
    queryKey: [`${name}`],
    queryFn: () => request.get(`/${name}`).then((res) => res.data),
  });
};
