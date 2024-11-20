import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Colors } from "../../Theme/colors";
import { useSelector } from "react-redux";
import TrashProduct from "../../Pages/Trash/components/trash-product/trashproduct";
import formatter from "../../config/formatter";
const Trash = () => {
  const { products } = useSelector((state) => state.product);
  const { price } = useSelector((state) => state.product);
  const { count } = useSelector((state) => state.product);
  return (
    <Box pt={"25px"} pb={"142px"}>
      <Container>
        <Typography
          mb={"24px"}
          color={Colors.text}
          variant="h6"
          fontSize={"24px"}
        >
          Корзина
        </Typography>
        <Stack direction={"row"} gap={"24px"}>
          <Grid2 container spacing={"24px"} direction={"column"}>
            {products.map((item) => (
              <Grid2 key={item.id}>
                <TrashProduct {...item} />
              </Grid2>
            ))}
          </Grid2>
          <Box width={"330px"}>
            <Box padding={"24px"} bgcolor={"#f7f7f7"}>
              <Typography variant="body3" mb={"16px"}>
                В корзине
              </Typography>
              <Typography mb={"17px"} variant="body1">
                Товаров: {count}
              </Typography>
              <Typography
                mb={"12px"}
                variant="body1"
                color={Colors.m3SysDightPrimary}
              >
                Введите промокод
              </Typography>
              <Typography variant="h4" color={Colors.text}>
                {formatter(price)}Сум
              </Typography>
            </Box>
            <Button
              sx={{
                width: "100%",
                borderRadius: "0px",
              }}
              variant="contained"
              fullWidth
              bgcolor={Colors.gipermart}
            >
              <p
                style={{
                  color: Colors.text,
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "100%",
                }}
              >
                Оформить заказ
              </p>
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Trash;
