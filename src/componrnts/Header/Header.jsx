import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";



const Header = () => {
  const [menuOpen,setmenuOpen] = useState(false)

  const getMenuStyles = (menuOpen) =>{
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpen && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="" width={100} />

      <OutsideClickHandler 
        onOutsideClick={()=>setmenuOpen(false)}
      >
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
          <a href=""> Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </OutsideClickHandler>
        <div className="menu_icon" onClick={() => setmenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
