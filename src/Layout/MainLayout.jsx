import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/footer";
import LandingPage from "../Components/Landing";



function MainLayout({ children }) {
  return (
    <>
       <div style={{ paddingTop: '0px', paddingBottom: '0px' }}>
       {/* Header is fixed at the top */}
      <Header />
      <main>{children}</main>
      
      <LandingPage/>
      
      <Footer />
      </div>
    </>
  );
}

export default MainLayout;