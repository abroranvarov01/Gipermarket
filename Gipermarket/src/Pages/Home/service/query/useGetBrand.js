import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";
const useGetBrand = () => {
  return useQuery({
    queryKey: ["brand"],
    queryFn: () => request.get("/brand").then((res) => res.data),
  });
};
export default useGetBrand;

