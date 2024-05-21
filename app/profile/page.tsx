"use client";

import Logout from "@/components/Logout";
import Navbar from "@/components/Navbar";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="h-full flex-1 w-full flex flex-col justify-center items-center">
        <div className="card w-full relative max-w-[300px]">
          <div className="card-content backdrop-blur-sm rounded-lg gap-1 shadow-lg p-8 text-center border-2 border-[#635dff]">
            <div className="mb-6">
              {user?.picture && (
                <img
                  src={user?.picture}
                  alt="Profile Picture"
                  width={140}
                  height={140}
                  fetchPriority="high"
                  className="rounded-full mx-auto"
                />
              )}
            </div>
            <h1 className="text-2xl text-white font-bold">{user?.name}</h1>
            <p className="text-gray-300">{user?.email}</p>
            <p className="text-sm text-gray-200 mb-2">
              {user?.email_verified ? "Email verified" : "Email not verified"}
            </p>
            <Logout />
          </div>
        </div>
      </section>
    </div>
  );
};

export default withPageAuthRequired(Profile, {
  returnTo: "/api/auth/login", // URL to redirect to if the user is not authenticated
  onRedirecting: () => (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="font-medium text-lg">Redirecting...</p>
    </div>
  ), // Component to display while redirecting to the login page
  onError: (error) => <div>Error: {error.message}</div>, // Component to display if an error occurs while checking authentication status
});
