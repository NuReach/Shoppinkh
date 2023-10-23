import React from "react";
import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar/TopBar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slide/Slider";
import MiniMenu from "../Components/Menu/MiniMenu";
import { Store } from "../Store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;
  return (
    <div>
      <TopBar />
      <Navbar />
      <Slider />
      <MiniMenu />
      <Footer />
    </div>
  );
}

export default Home;
