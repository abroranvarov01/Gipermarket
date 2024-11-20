import React from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { Colors } from "../../../../Theme/colors";
import LikeIcon2 from "../../../../assets/product/like-icon2";
import DeleteIcon from "../../../../assets/product/delete-icon";
import formatter from "../../../../config/formatter";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../redux/product-reducer/product-reducer";
import IncIcon from "../../../../assets/product/inc-icon";
import DecIcon from "../../../../assets/product/dec-icon";
import { toggleAmount } from "../../../../redux/product-reducer/product-reducer";

const TrashProduct = (props) => {
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    dispatch(removeProduct({ id }));
  };

  return (
    <Stack
      pl={"9px"}
      pb={"25px"}
      borderBottom={"1px solid #E0E0E0"}
      direction={"row"}
      gap={"16px"}
    >
      <Box>
        <img
          style={{ width: "200px", height: "200px" }}
          src={props.img}
          alt="img"
        />
      </Box>
      <Stack>
        <Box>
          <Stack
            mb={"4px"}
            direction={"row"}
            alignItems={"center"}
            gap={"50px"}
          >
            <Typography
              width={"553px"}
              color={Colors.text}
              variant="h4"
              fontWeight={"500"}
            >
              {props.title}
            </Typography>
            <Typography color={Colors.text} variant="h4">
              {formatter(props.price)} Сум
            </Typography>
          </Stack>
          <Typography mb={"16px"}>{props.rame}</Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} gap={"36px"}>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton>
                  <LikeIcon2 />
                </IconButton>
                <Typography variant="body1" lineHeight={"100%"} color="#999">
                  В избранное
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton onClick={() => deleteProduct(props.id)}>
                  <DeleteIcon />
                </IconButton>
                <Typography variant="body1" lineHeight={"100%"} color="#999">
                  Удалить
                </Typography>
              </Stack>
            </Stack>
            <Stack
              bgcolor={"#ededed"}
              direction={"row"}
              gap={"22px"}
              alignItems={"center"}
            >
              <IconButton
                sx={{
                  bgcolor: "white",
                  borderRadius: "0",
                  width: "36px",
                  height: "36px",
                  border: "2px solid #ededed",
                }}
                onClick={() =>
                  dispatch(toggleAmount({ type: "decrement", id: props.id }))
                }
              >
                <DecIcon />
              </IconButton>
              <Typography
                color={Colors.text}
                variant="body3"
                lineHeight={"120%"}
              >
                {props.product_count}
              </Typography>
              <IconButton
                sx={{
                  bgcolor: "white",
                  borderRadius: "0",
                  width: "36px",
                  height: "36px",
                  border: "2px solid #ededed",
                }}
                onClick={() =>
                  dispatch(toggleAmount({ type: "increment", id: props.id }))
                }
              >
                <IncIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default TrashProduct;
