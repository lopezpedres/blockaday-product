import React from "react";

export const NavbarOptions = ({activeBurger}:any) => {
  return (
    <div className= {`${activeBurger? 'block': 'hidden'} lg:flex lg:flex-wrap lg:m-auto m-2 justify-evenly bg-white `}>
      <form className="flex flex-wrap  ">
        <input
          className="border-black my-auto  border-l border-b border-t rounded-sm min-w-[13rem] md:min-w-[300px] min-h-[40px] p-1 "
          placeholder="What do you want to learn?"
        />
        <button className="px-3 min-h-[40px] my-auto  bg-blue-800 rounded-sm border border-black">
          <img src="/searchNav.svg" />
        </button>
      </form>

      <div className=" flex flex-wrap font-bold lg:ml-20">
        <img
          className="rounded-full max-w-[40px]  m-2"
          src="/images/user.jpg"
        />
        <p className="my-auto">
          <a className=" p-2">Miguel Lopez</a>
        </p>
      </div>
    </div>
  );
};
