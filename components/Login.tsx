import Link from "next/link";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <Link
      href={"/api/auth/login"}
      className="bg-[#635dff] text-white text-center rounded-xl p-2 px-8 min-w-52 font-bold hover:bg-opacity-75"
    >
      Login
    </Link>
  );
};

export default Login;
