import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../Theme/colors";
import formatter from "../../config/formatter";
import { Link } from "react-router-dom";
const ProductCard2 = (props) => {
  return (
    <Stack
      height={"157px"}
      gap={"16px"}
      py={"8px"}
      px={"4px"}
      direction={"row"}
      width={"413px"}
    >
      <Link to={`/productdetail/${props.id}`}>
        <Box>
          <img
            style={{ width: "140px", height: "140px" }}
            src={props.img}
            alt=""
          />
        </Box>
      </Link>
      <Box>
        <Typography mb={"49px"} color={Colors.text} variant="body2">
          {props.title}
          {props.rame}
          {props.color}
        </Typography>
        <Stack>
          <Typography sx={{ color: "black" }} variant="h3">
            {formatter(props.price)}
            <span style={{ fontWeight: "semibold" }}>Сум</span>
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProductCard2;
