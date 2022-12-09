import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { NavbarOptions } from "./NavbarOptions";

const Navbar = () => {
  const [activeBurger, setActiveBurger] = useState<Boolean>(false);
  const router = useRouter();
  const { pathname } = router;
  const lastPath = pathname.split("/")[pathname.split("/").length - 1];
  console.log(lastPath);

  return (
    <div
      className={` ${
        lastPath === "signin" ? "hidden" : "fixed"
      } z-10 top-0 w-full   h-16  border-b-2 shadow-sm bg-white`}
    >
      <button
        onClick={() => setActiveBurger(!activeBurger)}
        className=" lg:hidden absolute m-3 p-1"
      >
        <img className="my-auto" src="/menu.svg" />
      </button>
      <nav className="flex-col lg:flex lg:flex-row max-w-5xl lg:justify-evenly mx-auto ">
        <div>
          <Link href="/">
            <a className="flex flex-row justify-center  md:mr-5">
              <img src="/images/hero-header.png" className="max-h-10 m-2" />
              <h3 className="text-xl font-bold text-blue-800 my-auto">
                Blockaday
              </h3>
            </a>
          </Link>
        </div>
        <NavbarOptions activeBurger={activeBurger} />
        <div>
          <img />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
