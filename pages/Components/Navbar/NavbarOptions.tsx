import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export const NavbarOptions = ({ activeBurger }: { activeBurger: Boolean }) => {
  const { data: session } = useSession();
  return (
    <div
      className={`${
        activeBurger ? "block" : "hidden"
      } lg:flex lg:flex-wrap lg:m-auto m-2 justify-evenly bg-white `}
    >
      <form className="flex flex-wrap  ">
        <input
          className="border-black my-auto  border-l border-b border-t rounded-sm min-w-[13rem] md:min-w-[300px] min-h-[40px] p-1 "
          placeholder="What do you want to learn?"
        />
        <button className="px-3 min-h-[40px] my-auto  bg-blue-800 rounded-sm border border-black">
          <img src="/searchNav.svg" />
        </button>
      </form>

      {session ? (
        <div className=" flex flex-wrap font-bold lg:ml-20">
          <img
            className="rounded-full max-w-[40px]  m-2"
            src={session.user?.image || "./images/user"}
            alt="User"
          />
          <p className="my-auto">
            <a className=" p-2">{session.user?.name}</a>
          </p>
          <button
            className="bg-transparent hover:text-blue-700 text-blue-500 font-semibold  border border-blue-500 hover:border-blue-700 rounded m-2 p-2 "
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      ) : (
        <button className="bg-transparent hover:text-blue-700 text-blue-500 font-semibold border  border-blue-500 hover:border-blue-700 rounded m-2 p-2">
          <Link href="/auth/signin">
            <a>Signin</a>
          </Link>
        </button>
      )}
    </div>
  );
};
