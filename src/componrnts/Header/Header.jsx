import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";



const Header = () => {
  const [menuOpen,setmenuOpen] = useState(false)
  console.log(menuOpen);

  const getMenuStyles = (menuOpen) =>{
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpen && "-100%"}
    }
  }

  const outClick = () =>{
    if(menuOpen){
      setmenuOpen(false)
      console.log("saad");
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <span className="logo">Dream <span className="logo" style={{color:"#5370e1"}}>City</span></span>
        {/* <img src="./logo.png" alt="" width={100} /> */}

      <OutsideClickHandler 
        onOutsideClick={()=> outClick()} 
      >
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
          <a href="#Residencies"> Residencies</a>
          <a href="#Value">Our Value</a>
          <a href="#Contact">Contact Us</a>
          <a href="#Get">Get Started</a>
          <button className="button">
            <a href="#Contact1">Contact</a>
          </button>
        </div>
        <div className="menu_icon" onClick={() => setmenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
