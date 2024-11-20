import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    count: 0,
    price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        state.products.push({
          ...action.payload,
          product_price: action.payload.price,
          product_count: 1,
        });
      }
    },
    toggleAmount: (state, action) => {
      state.products = state.products.map((item) => {
        if (
          action.payload.type === "increment" &&
          item.id === action.payload.id
        ) {
          return {
            ...item,
            product_count: item.product_count + 1,
            product_price: (item.product_count + 1) * item.price,
          };
        } else if (
          action.payload.type === "decrement" &&
          item.id === action.payload.id &&
          item.product_count > 1
        ) {
          return {
            ...item,
            product_count: item.product_count - 1,
            product_price: (item.product_count - 1) * item.price,
          };
        } else {
          return item;
        }
      });
      state.count = state.products.reduce(
        (acc, item) => acc + item.product_count,
        0
      );
      state.price = state.products.reduce(
        (acc, item) => acc + item.product_price,
        0
      );
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.count = state.products.reduce(
        (acc, item) => acc + item.product_count,
        0
      );
      state.price = state.products.reduce(
        (acc, item) => acc + item.product_price,
        0
      );
    },
    totalCount: (state) => {
      state.count = state.products.reduce(
        (acc, item) => acc + item.product_count,
        0
      );
    },
    totalPrice: (state) => {
      state.price = state.products.reduce(
        (acc, item) => acc + item.product_price,
        0
      );
    },
    isProductExists: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      return !!product;
    },
  },
});

export const {
  addProduct,
  toggleAmount,
  removeProduct,
  totalCount,
  totalPrice,
  isProductExists,
} = productReducer.actions;
export default productReducer.reducer;
