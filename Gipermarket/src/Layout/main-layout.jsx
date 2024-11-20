import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/footer";

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
