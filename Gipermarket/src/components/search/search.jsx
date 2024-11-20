import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "../../assets/Header/search-icon";
import { Colors } from "../../Theme/colors";

const Search = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.query);
    onSearch(data.query);
  };

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: Colors.m3SysDightOutline,
              padding: "16px",
            },
            "&:hover fieldset": {
              borderColor: Colors.gipermart,
            },
            "&.Mui-focused fieldset": {
              borderColor: Colors.gipermart,
            },
            width: "673px",
          },
          borderRadius: 1,
        }}
      />
    </form>
  );
};

export default Search;
