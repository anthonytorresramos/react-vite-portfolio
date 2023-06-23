import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";

const HomeLayout = () => {
  //   const [videoLoaded, setVideoLoaded] = useState(false);
  //   const handleVideoLoad = () => {
  //     setVideoLoaded(true);
  //   };

  return (
    <section>
      <Header />
      <Hero />
      <Outlet />
    </section>
  );
};
export default HomeLayout;
