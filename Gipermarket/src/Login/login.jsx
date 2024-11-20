import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useCreateUsers } from "../Pages/Home/service/query/useCreateUser";
import { saveState } from "../config/storage";
export const Login = ({ onClose, onClick }) => {
  const { register, reset, handleSubmit } = useForm();
  const { mutate } = useCreateUsers();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        console.log(res);

        saveState("users", res);
      },
      onError: (err) => {
        console.log(err);
      },
    });
    reset();
  };

  return (
    <>
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
                style={{
                  padding: "16px 7px 16px 12px",
                  width: "100%",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "black",
                }}
                autoComplete="false"
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
                Пароль
              </Typography>
              <input
                style={{
                  padding: "16px 7px 16px 12px",
                  width: "100%",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "black",
                }}
                autoComplete="false"
                {...register("password")}
                type="password"
              />
            </Box>
            <Box textAlign={"right"} mb={"20px"} sx={{ cursor: "pointer" }}>
              <Typography fontWeight={"400"} fontSize={"16px"} color="#808080">
                Забыли пароль?
              </Typography>
            </Box>
            <Box>
              <Box mb={"16px"}>
                <Button
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    padding: "12px 24px",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Войти
                </Button>
              </Box>
              <Box mb={"16px"}>
                <Button
                  onClick={onClick}
                  sx={{
                    width: "100%",
                    py: "12px",
                  }}
                  variant="outlined"
                >
                  Зарегистрироваться
                </Button>
              </Box>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
