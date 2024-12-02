import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
      <h1>Welcome to TyingKnots</h1>
       <h2><center><u><b><i> "Where Connections Blossom, and Dreams Begin"</i></b></u></center></h2>

      <nav className="navigation">
        <div class="vl"></div>
          <button type="button">HOME</button>
          <button type="button">CONNECT</button>
          <button type="button">ABOUT US</button>
        </nav>
        <hr/>
        <nav className="navigation-right">
          <div className = "Sign-Btn">
          <button type="button">SIGN UP</button>
          <button type="button">LOGIN</button>
          </div>
          {/* <div class="v2"></div> */}
        </nav>
        <hr/>
        
       
        <p><center>At TyingKnots, we believe every bond starts with a meaningful connection.
           Whether you're looking to weave the threads of love, friendship, or partnership, 
           our platform is here to help you discover
            and nurture the relationships that matter most.</center>

          <center><b> "Explore. Connect. Celebrate."</b></center>
          
     
          *<center><b> "Let’s Tie the Knot Together!"</b> </center></p>
       
      </header>
    </>
  );
};

export default Header;