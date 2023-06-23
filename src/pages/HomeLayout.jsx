import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomeLayout = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Outlet />
    </section>
  );
};
export default HomeLayout;
