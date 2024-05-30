"use client";

import ChatWindow from "@/components/ChatWindow";
import Logout from "@/components/Logout";
import Navbar from "@/components/Navbar";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";

type Props = {};

const Chats = (props: Props) => {
  const { user, error, isLoading } = useUser();
  console.log(user);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex min-w-screen h-screen flex-col">
            <Navbar />

            <div className="flex h-full w-full flex-col py-10 px-44">
              {/* <h1 className="text-5xl font-normal leading-loose">
                Welcome,
                <br />{" "}
                <span className="font-extrabold block leading-10">
                  {user?.name}
                </span>
              </h1>
              <div className="my-20 flex flex-col items-start gap-5">
                <p>Click below to check your details</p>
                <Link
                  href="/profile"
                  className="bg-[#635dff] p-2 font-bold text-white px-20 rounded-lg"
                >
                  Profile
                </Link>
                <Logout />
              </div> */}
              <ChatWindow />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default withPageAuthRequired(Chats, {
  returnTo: "/api/auth/login", // URL to redirect to if the user is not authenticated
  onRedirecting: () => (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="font-medium text-lg">Redirecting...</p>
    </div>
  ), // Component to display while redirecting to the login page
  onError: (error) => <div>Error: {error.message}</div>, // Component to display if an error occurs while checking authentication status
});
