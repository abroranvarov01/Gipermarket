import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CustomIconButton } from "./style";
import BuyIcon from "../../assets/product/buy-icon";
import LikeIcon from "../../assets/product/like-icon";
import {
  addProduct,
  isProductExists,
} from "../../redux/product-reducer/product-reducer";
import { useDispatch, useSelector } from "react-redux";
import EyeIcon from "../../assets/product/eye-icon";
import formatter from "../../config/formatter";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const productExists = useSelector((state) =>
    state.product.products.some((item) => item.id === props.id)
  );

  const buyProduct = (data) => {
    dispatch(addProduct(data));
  };

  const truncateTitle = (title) => {
    return title.length > 50 ? title.slice(0, 50) + "..." : title;
  };

  return (
    <Box height={"323px"} width={"214px"} padding={"4px 16px 14px 4px"}>
      <Stack mb={"12px"} direction={"row"} justifyContent={"space-between"}>
        <Link to={`/productdetail/${props.id}`}>
          <Box width={"165px"} height={"165px"}>
            <img
              style={{ width: "165px", height: "165px" }}
              src={props.img}
              alt="img"
            />
          </Box>
        </Link>
        <IconButton sx={{ marginBottom: "auto", pt: "12px" }}>
          <LikeIcon />
        </IconButton>
      </Stack>
      <Typography height={"72px"} width={"157px"} mb={"18px"} variant="body1">
        {truncateTitle(props.title)}
        {props.rame ? ` ... ${props.rame}` : ""}
        {props.color ? ` ... ${props.color}` : ""}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={"11px"}>
        <Typography variant="h5">{formatter(props.price)} Сум</Typography>
        <CustomIconButton onClick={() => buyProduct(props)}>
          {productExists ? <EyeIcon /> : <BuyIcon />}
        </CustomIconButton>
      </Stack>
    </Box>
  );
};

export default ProductCard;
