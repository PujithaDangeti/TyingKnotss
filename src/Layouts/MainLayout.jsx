import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import LandingPage from "../Components/Landing";


function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Main/>
      <LandingPage/>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;