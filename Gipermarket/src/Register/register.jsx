import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRegister } from "../Pages/Home/service/query/useRegister";

export const Register = ({ onClose, onClick }) => {
  const { register, reset, handleSubmit } = useForm();
  const { mutate } = useRegister();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        console.log("User registered successfully");
        reset();
        if (onClick) {
          onClick();
        }
      },
      onError: (error) => {
        console.error("Error registering user:", error);
      },
    });
    onClick();
  };

  const inputStyle = {
    padding: "16px 7px 16px 12px",
    width: "100%",
    fontWeight: "400",
    fontSize: "16px",
    color: "black",
  };

  return (
    <Box height={"782px"} overflow={"hidden"}>
      <Container>
        <form onSubmit={handleSubmit(submit)}>
          <Box textAlign={"right"} mt={"12px"}>
            <Button variant="text" onClick={onClose}>
              X
            </Button>
          </Box>
          <Typography
            mt={"8px"}
            mb={"20px"}
            fontWeight={"500"}
            fontSize={"20px"}
            color="black"
          >
            Войти или создать профиль
          </Typography>
          <Box mb={"20px"}>
            <Typography
              fontWeight={"400"}
              fontSize={"16px"}
              color="#808080"
              mb={"12px"}
            >
              Email
            </Typography>
            <input
              style={inputStyle}
              autoComplete="off"
              {...register("email")}
              type="email"
              placeholder="Email"
            />
          </Box>
          <Box mb={"20px"}>
            <Typography
              fontWeight={"400"}
              fontSize={"16px"}
              color="#808080"
              mb={"12px"}
            >
              Номер телефона
            </Typography>
            <input
              style={inputStyle}
              autoComplete="off"
              {...register("number")}
              type="tel"
              placeholder="+998"
            />
          </Box>
          <Box mb={"20px"}>
            <Typography
              fontWeight={"400"}
              fontSize={"16px"}
              color="#808080"
              mb={"12px"}
            >
              Пароль
            </Typography>
            <input
              style={inputStyle}
              autoComplete="off"
              {...register("password")}
              type="password"
              placeholder="Пароль"
            />
          </Box>
          <Box textAlign={"right"} mb={"20px"} sx={{ cursor: "pointer" }}>
            <Typography fontWeight={"400"} fontSize={"16px"} color="#808080">
              Забыли пароль?
            </Typography>
          </Box>
          <Box mb={"16px"}>
            <Button
              sx={{
                width: "100%",
                py: "12px",
              }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};
