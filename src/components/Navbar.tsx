import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-primary py-2 text-[30px] dark:text-white flex justify-between item-center appContainer">
      Note Keeper
      <div className="cursor-pointer" onClick={() => signOut()}>
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
