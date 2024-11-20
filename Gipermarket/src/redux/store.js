import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import { loadState, saveState } from "../config/storage";
import {
  addProduct,
  removeProduct,
  totalCount,
  totalPrice,
  toggleAmount,
} from "./product-reducer/product-reducer";
import productReducer from "./product-reducer/product-reducer";

const countMiddleware = createListenerMiddleware();
countMiddleware.startListening({
  matcher: isAnyOf(addProduct, removeProduct, toggleAmount),
  effect: (action, api) => {
    api.dispatch(totalCount());
    api.dispatch(totalPrice());
  },
});

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState: {
    product: loadState("product_list"),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(countMiddleware.middleware),
});

store.subscribe(() => {
  saveState("product_list", store.getState().product);
});

export default store;