import Link from "next/link";
import React from "react";

type Props = {};

const Signup = (props: Props) => {
  return (
    <Link
      href={"/api/auth/login"}
      className="bg-white text-black rounded-xl p-3 px-8 min-w-52 text-center font-bold hover:bg-opacity-75"
    >
      Sign-Up
    </Link>
  );
};

export default Signup;
