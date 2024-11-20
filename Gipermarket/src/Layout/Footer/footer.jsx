import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Colors } from "../../Theme/colors";
import { Link } from "react-router-dom";
import Logo from "../../assets/Footer/logo.svg";
import Typography from "@mui/material/Typography";
import Facebook from "../../assets/Footer/facebook";
import Ox from "../../assets/Footer/ox";
import Wk from "../../assets/Footer/wk";
import Yt from "../../assets/Footer/yt";
import Inst from "../../assets/Footer/inst";
import Payme from "../../assets/Footer/payme";
import UzCard from "../../assets/Footer/uzcard";
import Humo from "../../assets/Footer/hume";
const Footer = () => {
  return (
    <Box>
      <Box bgcolor={Colors.footerBg}>
        <Container>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            pt={"40px"}
            pb={"36px"}
          >
            <Box>
              <Box mb={"16px"}>
                <Link>
                  <img src={Logo} alt="logo" />
                </Link>
              </Box>
              <Box mb={"12px"}>
                <a style={{ textDecoration: "none" }} href="#">
                  <Typography mb={"2px"} variant="h2" color={Colors.text}>
                    +99 893 374-66-44
                  </Typography>
                </a>
                <Typography
                  color={Colors.text}
                  variant="body2"
                  fontSize={"14px"}
                >
                  справочная служба
                </Typography>
              </Box>
              <Box mb={"16px"}>
                <a style={{ textDecoration: "none" }} href="#">
                  <Typography mb={"2px"} variant="h2" color={Colors.text}>
                    +99 893 374-66-44
                  </Typography>
                </a>
                <Typography
                  color={Colors.text}
                  variant="body2"
                  fontSize={"14px"}
                >
                  справочная служба
                </Typography>
              </Box>
              <Box>
                <Typography
                  mb={"8px"}
                  color={Colors.text}
                  variant="h4"
                  fontSize={"14px"}
                >
                  Оставайтесь на связи
                </Typography>
                <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
                  <a href="#">
                    <Facebook />
                  </a>
                  <a href="#">
                    <Ox />
                  </a>
                  <a href="#">
                    <Wk />
                  </a>
                  <a href="#">
                    <Yt />
                  </a>
                  <a href="#">
                    <Inst />
                  </a>
                </Stack>
              </Box>
            </Box>
            <Stack direction={"column"} gap={"16px"}>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Условия обмена и возврата
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Каталог
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  О компании
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Контакты
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Доставка
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Оплата
                </Typography>
              </a>
            </Stack>
            <Stack direction={"column"} gap={"16px"}>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Клиентам
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Личный кабинет
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Блог
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Обратная связь
                </Typography>
              </a>
            </Stack>
            <Stack direction={"column"} gap={"16px"}>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Информация
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Пользовательское соглашение
                </Typography>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <Typography
                  variant="body1"
                  color={Colors.text}
                  fontSize={"14px"}
                  lineHeight={"143%"}
                >
                  Политика конфиденциальности и оферта
                </Typography>
              </a>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bgcolor={" #eaeaea"}>
        <Container>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={"25px"}
          >
            <Typography
              variant="body1"
              color={Colors.text}
              fontSize={"14px"}
              lineHeight={"143%"}
            >
              © 2022 Любое использование контента без письменного разрешения
              запрещено
            </Typography>
            <Stack direction={"row"} gap={"24px"} alignItems={"center"}>
              <Link>
                <Payme />
              </Link>
              <Link>
                <UzCard />
              </Link>
              <Link>
                <Humo />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
