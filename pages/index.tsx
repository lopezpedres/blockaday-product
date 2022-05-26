import type { NextPage } from "next";
import HeroHeader from "./Components/Home/HeroHeader";

const Home: NextPage = () => {
  return (
    <div>
      <div className="static top-0 w-full h-16 bg-black">navbar</div>
      <HeroHeader />
    </div>
  );
};

export default Home;
