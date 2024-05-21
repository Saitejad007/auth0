"use client";

import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Signup from "@/components/Signup";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user, isLoading } = useUser();
  return (
    <>
      {isLoading ? (
        <main className="flex py-40 px-44 min-h-screen flex-col items-center justify-center gap-10 p-24">
          Loading...
        </main>
      ) : (
        <main className="flex min-h-screen min-w-screen flex-col">
          <Navbar />
          <div className="flex flex-col items-center justify-center gap-10 py-48 px-44">
            <h1 className="font-medium text-7xl">
              Welcome to the{" "}
              <span className="text-[#635dff] font-extrabold">Chatsapp!</span>
            </h1>
            {!user && (
              <div className="mb-32 flex justify-center gap-6 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <Login />
                <Signup />
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
}
