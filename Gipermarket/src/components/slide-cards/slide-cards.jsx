import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NextIcon from "../../assets/slide-cards/next-icon";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ProductCard from "../product-card/product-card";
import { useGetProducts } from "../../Pages/Home/service/query/useGetProducts";
import PrewIcon from "../../assets/slide-cards/prew-icon";
import { Link } from "react-router-dom";

const SlideCards = ({ title, dataName, delBtn }) => {
  const { data } = useGetProducts({ name: dataName });

  return (
    <Box pl={"40px"} py={"16px"}>
      <Stack
        pt={"16px"}
        pb={"8px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">{title}</Typography>
        {!delBtn && (
          <Stack direction={"row"} spacing={1}>
            <Button
              className={`.swiper-button-prev${title}`}
              sx={{
                ":after": {
                  content: "none",
                },
              }}
            >
              <PrewIcon />
            </Button>
            <Button
              className={`.swiper-button-prev${title}`}
              sx={{
                ":after": {
                  content: "none",
                },
              }}
            >
              <NextIcon />
            </Button>
          </Stack>
        )}
      </Stack>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        slidesPerView={6}
        loop={true}
        navigation={
          delBtn
            ? {
                nextEl: `.swiper-button-next${title}`,
                prevEl: `.swiper-button-prev${title}`,
              }
            : false
        }
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <Grid container spacing={2}>
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <Grid item>
                <ProductCard {...item} />
              </Grid>
            </SwiperSlide>
          ))}
        </Grid>
      </Swiper>
    </Box>
  );
};

export default SlideCards;
