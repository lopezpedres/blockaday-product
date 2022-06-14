import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" fixed z-10 top-0 w-full  h-16  border-b-2 shadow-sm bg-white">
      <nav className=" flex flex-wrap mx-auto max-w-5xl">
        <Link href="/">
          <a>
            <div className="flex flex-wrap md:mr-5">
              <img src="/images/hero-header.png" className="max-h-10 m-2" />
              <h3 className="text-xl font-bold text-blue-800 my-auto">
                Blockaday
              </h3>
            </div>
          </a>
        </Link>
        <form className=" md:flex my-auto mr-auto hidden md:flex-wrap ">
          <input
            className="border-black border-l border-b border-t rounded-sm min-w-[200px] md:min-w-[300px] min-h-[40px] p-1 ml-10 "
            placeholder="What do you want to learn?"
          />
          <button className="px-2 bg-blue-800 rounded-sm border border-black">
            <img src="/searchNav.svg" />
          </button>
        </form>

        <div className=" hidden md:flex md:flex-wrap font-bold">
          <img
            className="rounded-full max-w-[40px] m-2"
            src="/images/user.jpg"
          />
          <p className="my-auto font-bold">
            <a className=" p-2">Miguel Lopez</a>
          </p>
        </div>
        <div>
          <img/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
