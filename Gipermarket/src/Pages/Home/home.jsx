import React from "react";
import {
  Box,
  Container,
  Button,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { useGetBanner } from "./service/query/useGetBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import PrewIcon from "../../assets/Banner/prew-Icon";
import NextIcon from "../../assets/Banner/nextIcon";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useGetCatalog } from "./service/query/useGetCatalog";
import CatalogCard from "./components/catalog-card";
import SlideCards from "../../components/slide-cards/slide-cards";
import { useGetAds } from "./service/query/useGetAds";
import { Colors } from "../../Theme/colors";
import { useGetProducts } from "./service/query/useGetProducts";
import ProductCard2 from "../../components/product-card2/product-card2";
import useGetBrand from "./service/query/useGetBrand";
import { Link } from "react-router-dom";
const Home = () => {
  const { data: BannerData } = useGetBanner();
  const { data: CatalogData } = useGetCatalog();
  const { data: AdsData } = useGetAds();
  const { data: phonesData } = useGetProducts({ name: "phones" });
  const { data: notebooksData } = useGetProducts({ name: "notebook" });
  const { data: brandData } = useGetBrand();

  return (
    <>
      <section className="banner">
        <Box sx={{ width: "100%", mt: 3, position: "relative" }}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {BannerData?.flat().map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src={item.img}
                  alt={item.alt || "Banner"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            className="swiper-button-prev"
            sx={{
              position: "absolute",
              bgcolor: "white",
              top: "50%",
              left: "10px",
              zIndex: 10,
              padding: "8px",
              width: "30px",
              height: "60px",
              borderRadius: "50%",
              color: "white",
              transform: "translateY(-50%)",
              ":after": {
                content: "none",
              },
            }}
          >
            <PrewIcon />
          </Button>
          <Button
            className="swiper-button-next"
            sx={{
              bgcolor: "white",
              position: "absolute",
              top: "50%",
              right: "10px",
              zIndex: 10,
              width: "30px",
              height: "60px",
              borderRadius: "50%",
              color: "white",
              transform: "translateY(-50%)",
              ":after": {
                content: "none",
              },
            }}
          >
            <NextIcon />
          </Button>
        </Box>
      </section>
      <section className="catalog">
        <Box py={"32px"}>
          <Swiper
            spaceBetween={"21px"}
            modules={[Navigation, Autoplay]}
            loop={true}
            slidesPerView={5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {CatalogData?.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/catalog/${item.name}`}
                >
                  <CatalogCard img={item.img} {...item} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </section>
      <section className="phone&tablet">
        <SlideCards title={"Phone & Tablet"} dataName={"phones"}></SlideCards>
      </section>
      <section style={{ padding: "32px 0" }}>
        <Box pt={"16px"} pb={"30px"} bgcolor={Colors.adsBg}>
          <Container>
            <Typography
              color={Colors.m3SysDightOnTertiaryContainer}
              variant="h4"
              mb={"24px"}
            >
              Акции
            </Typography>
            <Stack
              spacing={"22px"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              {AdsData?.map((item) => (
                <img key={item.id} src={item.img} alt="img" />
              ))}
            </Stack>
          </Container>
        </Box>
      </section>
      <section>
        <Box pt={"28px"} pb={"12px"}>
          <Container>
            <Stack direction={"row"} alignItems={"center"} gap={"34px"}>
              <Box>
                <Typography mb={"24px"} variant="body3" color={Colors.text}>
                  Смартфоны и планшеты
                </Typography>
                <Grid2
                  borderTop={"1px solid #ededed"}
                  py={"24px"}
                  direction={"column"}
                  container
                  spacing={"24px"}
                >
                  {phonesData?.slice(0, 3).map((item) => (
                    <Grid2 key={item.id}>
                      <ProductCard2 {...item} />
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
              <Box>
                <Typography mb={"24px"} variant="body3" color={Colors.text}>
                  Ноутбуки, планшеты и компьютеры
                </Typography>
                <Grid2
                  borderTop={"1px solid #ededed"}
                  py={"24px"}
                  direction={"column"}
                  container
                  spacing={"24px"}
                >
                  {notebooksData?.slice(0, 3).map((item) => (
                    <Grid2 key={item.id}>
                      <ProductCard2 {...item} />
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
              <Box>
                <Typography mb={"24px"} variant="body3" color={Colors.text}>
                  Смартфоны и планшеты
                </Typography>
                <Grid2
                  borderTop={"1px solid #ededed"}
                  py={"24px"}
                  direction={"column"}
                  container
                  spacing={"24px"}
                >
                  {phonesData?.slice(3, 6).map((item) => (
                    <Grid2 key={item.id}>
                      <ProductCard2 {...item} />
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
            </Stack>
          </Container>
        </Box>
      </section>
      <section>
        <SlideCards
          title={"Смартфоны и планшеты"}
          dataName={"phones"}
        ></SlideCards>
      </section>
      <section>
        <SlideCards
          delBtn={true}
          title={"Ноутбуки, планшеты и компьютеры"}
          dataName={"notebook"}
        ></SlideCards>
      </section>
      <section>
        <Box pt={"20px"} pb={"114px"}>
          <Container>
            <Typography
              variant="h4"
              color={Colors.text}
              mt={"32px"}
              mb={"24px"}
            >
              Популярные бренды
            </Typography>
            <Grid2 spacing={"16px"} container>
              {brandData?.map((item) => (
                <Grid2 size={2} key={item.id}>
                  <img
                    style={{ width: "181px", height: "90px" }}
                    src={item.img}
                    alt="img"
                  />
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default Home;
