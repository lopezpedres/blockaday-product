import type { NextPage } from "next";
import HeroCourses from "./Components/Home/HeroCourses";
import HeroHeader from "./Components/Home/HeroHeader";

const Home: NextPage = () => {
  return (
    <div>
      <HeroHeader />
      <HeroCourses/>
    </div>
  );
};

export default Home;
