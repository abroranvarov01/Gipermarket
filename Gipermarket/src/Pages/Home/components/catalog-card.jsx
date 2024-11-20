import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../Theme/colors";
const CatalogCard = (props) => {
  return (
    <Stack
      bgcolor={" #f6f6f6"}
      direction={"row"}
      px={"16px"}
      py={"14px"}
      gap={"16px"}
      alignItems={"center"}
      height={"162px"}
      borderRadius={"2px"}
    >
      <Box>
        <img src={props.img} alt="img" style={{ width: "64%" }} />
      </Box>
      <Typography color={Colors.text} variant="h6">
        {props.text}
      </Typography>
    </Stack>
  );
};

export default CatalogCard;
