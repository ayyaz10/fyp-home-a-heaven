import React, { useState, useRef, useEffect } from "react";
import TopNav from "../../components/ui/TopNav";
import Nav from "../../components/ui/Nav";
function Header() {
  return (
        <header>
            <TopNav />
            <Nav />
        </header>
  )
  
}

export default Header;
