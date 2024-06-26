import Link from "next/link";
import React from "react";

type Props = {};

const Logout = (props: Props) => {
  return (
    <Link
      href={"/api/auth/logout"}
      className="bg-red-400 text-white p-2 px-8 min-w-52 text-center rounded-lg hover:bg-red-500 font-bold"
    >
      Logout
    </Link>
  );
};

export default Logout;
