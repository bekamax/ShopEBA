import React from "react";
import MainRoats from "./roats/MainRoats";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoats />
      <Footer/>
    </>
  );
};

export default App;
