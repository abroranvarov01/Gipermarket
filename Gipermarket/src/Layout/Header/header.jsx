import {
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TelIcon from "../../assets/Header/tel-icon";
import { Colors } from "../../Theme/colors";
import Logo from "../../assets/Header/logo.svg";
import BtnIcon from "../../assets/Header/btn-icon";
import Search from "../../components/search/search";
import TrashIcon from "../../assets/Header/trash-icon";
import LoginIcon from "../../assets/Header/login-icon";
import { CustomIconButton } from "./style";
import SpecialIcon from "../../assets/Header/special-icon";
import { useSelector } from "react-redux";

export const Header = () => {
  const { count } = useSelector((state) => state.product);

  return (
    <Box>
      <Container>
        <Stack
          ml={"auto"}
          width={"600px"}
          py={"8px"}
          direction={"row"}
          alignItems={"center"}
          gap={"32px"}
        >
          <Stack direction={"row"} gap={"24px"}>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography color={Colors.headerTopText} variant="body1">
                Доставка и оплата
              </Typography>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography color={Colors.headerTopText} variant="body1">
                Пункты выдачи
              </Typography>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography color={Colors.headerTopText} variant="body1">
                Поддержка
              </Typography>
            </Link>
          </Stack>
          <Link style={{ textDecoration: "none" }} to="/">
            <Stack direction={"row"} alignItems={"center"} gap={"16px"}>
              <Icon>
                <TelIcon />
              </Icon>
              <Typography variant="body1" color={Colors.headerTopText}>
                +998 90 253 77 53
              </Typography>
            </Stack>
          </Link>
        </Stack>
        <Stack direction={"row"} gap={"52px"} alignItems={"center"} py={"18px"}>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <Link style={{ textDecoration: "none" }} to="/">
              <img src={Logo} alt="" />
            </Link>
            <Button startIcon={<BtnIcon />} variant="contained">
              Каталог
            </Button>
            <Search />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
            <CustomIconButton>
              <LoginIcon />
              <Typography color={Colors.headerTopText} variant="body1">
                Войти
              </Typography>
            </CustomIconButton>
            <CustomIconButton>
              <SpecialIcon />
              <Typography color={Colors.headerTopText} variant="body1">
                Избранное
              </Typography>
            </CustomIconButton>
            <Link style={{ textDecoration: "none" }} to="/trash">
              <CustomIconButton>
                <Badge badgeContent={count ? count : "0"} color="error">
                  <TrashIcon />
                </Badge>

                <Typography color={Colors.headerTopText} variant="body1">
                  Корзина
                </Typography>
              </CustomIconButton>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
