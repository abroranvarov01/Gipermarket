import React from "react";
import { useGetSingleCatalog } from "./service/query/useGetSingleCatalog";
import { useParams } from "react-router-dom";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { Grid } from "swiper/modules";
import ProductCard from "../../components/product-card/product-card";
import { useGetCatalog } from "../Home/service/query/useGetCatalog";
const Catalog = () => {
  const { name } = useParams();
  const { data } = useGetSingleCatalog(name);
  const { data: catalog } = useGetCatalog(name);

  const Tite = catalog?.find((item) => item.name === name);

  return (
    <Box pt={"16px"} pb={"84px"}>
      <Container>
        <Typography mb={"24px"} variant="h4">
          {Tite.text}
        </Typography>
        <Grid2 container spacing={"48px"}>
          {data?.map((item) => (
            <Grid2 key={item.id}>
              <ProductCard {...item} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Catalog;
