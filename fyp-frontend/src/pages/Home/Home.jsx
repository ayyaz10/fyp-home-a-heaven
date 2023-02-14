import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Collections from "./Collections";
import Products from "./Products";
import Footer from "./Footer";

function Home() {
  return (
    <div className="font-jost">
        <Header />
        <Hero />
        <Collections />
        <Products />
        <Footer />
    </div>
  )
}

export default Home;
