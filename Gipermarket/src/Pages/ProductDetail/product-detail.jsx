import {
  Box,
  Button,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Colors } from "../../Theme/colors";
import React from "react";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "./service/query/useGetSingleProduct";
import LikeIcon from "../../assets/product/like-icon";
import formatter from "../../config/formatter";
import { addProduct } from "../../redux/product-reducer/product-reducer";
import { useDispatch } from "react-redux";
const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useGetSingleProduct(id);
  const dispatch = useDispatch();
  return (
    <Box pt={"24px"} pb={"84px"}>
      <Container>
        <Typography mb={"18px"} variant="h4">
          {data?.title}
        </Typography>
        <Stack mb={"19px"} direction={"row"} gap={"36px"} alignItems={"center"}>
          <Stack direction={"row"} gap={"12px"} alignItems={"center"}>
            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.5}
              readOnly
            />
            <Typography color={"#76bc21"} variant="body1" lineHeight={"100%"}>
              (0)
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={"12px"} alignItems={"center"}>
            <IconButton>
              <LikeIcon />
            </IconButton>
            <Typography color={Colors.text} variant="body1" lineHeight={"100%"}>
              В избранное
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} pt={"24px"} borderTop={"1px solid #E0E0E0"}>
          <Stack direction={"row"} gap={"32px"}>
            <Box>
              <img
                style={{ width: "435px", height: "435px" }}
                src={data?.img}
                alt="img"
              />
            </Box>
            <Stack>
              <Box>
                <Box mb={"24px"}>
                  <Typography mb={"8px"} variant={"h6"}>
                    Объем памяти
                  </Typography>
                  <Typography
                    py={"8px"}
                    px={"14px"}
                    sx={{ display: "inline" }}
                    border={"2px solid #E44542"}
                    mb={"16px"}
                  >
                    {data?.rame ? data?.rame : data?.memory}
                  </Typography>
                </Box>
                <Typography variant="h3" color={Colors.text} mb={"16px"}>
                  Характеристики
                </Typography>
                <Stack spacing={"12px"} direction={"column"}>
                  <Stack direction={"row"} gap={"8px"}>
                    <Typography color={"#999;"} variant="body1">
                      Цвет:
                    </Typography>
                    <Typography color={Colors.text} variant="body1">
                      {data?.color}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"8px"}>
                    <Typography color={"#999;"} variant="body1">
                      экран:
                    </Typography>
                    <Typography color={Colors.text} variant="body1">
                      {data?.display ? data?.display : "6.2/2400x1080 Пикс"}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"8px"}>
                    <Typography color={"#999;"} variant="body1">
                      оперативная память:
                    </Typography>
                    <Typography color={Colors.text} variant="body1">
                      {data?.rame ? data?.rame : data?.ram}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"8px"}>
                    <Typography color={"#999;"} variant="body1">
                      память:
                    </Typography>
                    <Typography color={Colors.text} variant="body1">
                      {data?.rame ? data?.rame : data?.memory}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"8px"}>
                    <Typography color={"#999;"} variant="body1">
                      беспроводные интерфейсы:
                    </Typography>
                    <Typography color={Colors.text} variant="body1">
                      NFC, Wi-Fi, Bluetooth 5.0
                    </Typography>
                  </Stack>
                  <button
                    style={{
                      border: "none",
                      cursor: "pointer",
                      background: "none",
                    }}
                  >
                    <Typography width={"156px"} color={"#EC8A88"} variant="h6">
                      Все характеристики
                    </Typography>
                  </button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Box
            textAlign={"center"}
            border={"1px solid #EdEdEd"}
            padding={"45px 18px 17px 16px"}
            height={"167px"}
            width={"340px"}
          >
            <Typography
              mb={"21px"}
              color={Colors.text}
              variant="h1"
              lineHeight={"100%"}
            >
              {formatter(data?.price)}Сум
            </Typography>
            <Button
              onClick={() => dispatch(addProduct(data))}
              sx={{ width: "306px" }}
              fullWidth
              color={Colors.gipermart}
              variant="contained"
            >
              <Typography
                lineHeight={"100%"}
                variant="body1"
                color={Colors.text}
              >
                В корзину
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductDetail;
