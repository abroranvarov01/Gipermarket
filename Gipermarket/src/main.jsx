import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { client } from "./config/queryClient.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { theme } from "./Theme/theme.js";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
  >
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
          <CssBaseline />
          <ToastContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
