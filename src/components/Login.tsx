import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="h-[400px] w-[350px] bg-[#ffffff] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-items-center p-6 rounded-md shadow-lg">
      <p className="text-[24px] text-primaryDark mb-4">Note Keeper</p>
      <form
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
        className="w-full flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primaryDark"
          onClick={() => signIn("google")}
        >
          Submit
        </button>
      </form>

      <button
        className="mt-4 bg-white px-6 py-2 flex gap-2 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100"
        onClick={() => signIn("google")}
      >
        <FcGoogle width={20} />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
