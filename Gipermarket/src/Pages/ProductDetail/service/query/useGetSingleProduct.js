import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

const useGetSingleProduct = (id) => {
  return useQuery({
    queryKey: [`Product${id}`],
    queryFn: () => request.get(`/all/${id}`).then((res) => res.data),
  });
};

export default useGetSingleProduct;
