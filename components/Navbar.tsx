"use client";

import React from "react";
import Login from "./Login";
import { useUser } from "@auth0/nextjs-auth0/client";
import Logout from "./Logout";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const { user } = useUser();
  return (
    // h-20 bg-gradient-to-r from-transparent via-[#635dff]/10 to-transparent px-40 flex items-center
    // <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-8 shadow-md">
    <nav className="bg-[#635dff]/10 border-b border-b-[#635dff]/30 border-opacity-65 border- from-[#635dff]/60 via-[#635dff]/100 to-[#635dff]/60 py-4 px-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <p className="text-white font-bold text-2xl">Chatsapp</p>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/chats" className="text-white hover:text-gray-300">
                Chats
              </a>
            </li>
            <li>{user ? <Logout /> : <Login />}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
