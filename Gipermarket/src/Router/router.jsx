import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../Layout";
import Home from "../Pages/Home/home";
import { Login } from "../Login";
import { Register } from "../Register";
import Trash from "../Pages/Trash/trash";
import Catalog from "../Pages/catalog/catalog";
import ProductDetail from "../Pages/ProductDetail/product-detail";
export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/catalog/:name" element={<Catalog />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
};
