import type { NextPage } from "next";
import HeroCourses from "./Components/Home/HeroCourses";
import HeroHeader from "./Components/Home/HeroHeader";

const Home: NextPage = () => {
  return (
    <div className="2xl:max-w-5xl mx-auto lg:px-16 md:px-8 px-4">
      <div className="static top-0 w-full h-16 border-2 text-center text-xl">We can use your navbar here</div>
      <HeroHeader />
      <HeroCourses/>
    </div>
  );
};

export default Home;
