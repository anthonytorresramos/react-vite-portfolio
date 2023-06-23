import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";
import MyProjects from "../components/MyProjects";
import MyProject2 from "../components/MyProject2";

const HomeLayout = () => {
  //   const [videoLoaded, setVideoLoaded] = useState(false);
  //   const handleVideoLoad = () => {
  //     setVideoLoaded(true);
  //   };

  return (
    <section>
      <Header />
      <Hero />
      <MyProjects />
      <MyProject2 />
      <Outlet />
    </section>
  );
};
export default HomeLayout;
