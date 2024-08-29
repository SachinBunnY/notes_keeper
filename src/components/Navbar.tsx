import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-primary py-2 text-[30px] dark:text-white flex justify-between item-center appContainer">
      Note Keeper
      <div className="flex justify-between h-[2.4rem]">
        <button
          className="bg-[#1e293b] text-[60%] border rounded-lg cursor-pointer dark:text-slate-100 px-2 py-1 mr-4"
          onClick={() => signOut()}
        >
          SignOut
        </button>
        <Image
          className="rounded-full"
          src={session?.user?.image!}
          width={40}
          height={40}
          alt="dp"
        />
      </div>
    </div>
  );
};

export default Navbar;
