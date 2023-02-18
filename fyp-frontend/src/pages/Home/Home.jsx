import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Collections from "./Collections";
import Products from "./Products";
import SpecialOffer from "./SpecialOffer";
import Footer from "./Footer";

function Home() {
  return (
    <div className="font-jost">
        <Header />
        <Hero />
        <Collections />
        <Products />
        <SpecialOffer />
        <Footer />
    </div>
  )
}

export default Home;