import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Favorite from "../Favorite";
import About from "../About";
import MobileApp from "../MobileApp";
import Footer from "../Footer";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Favorite />
      <About />
      <MobileApp />
      <Footer />
    </>
  );
}