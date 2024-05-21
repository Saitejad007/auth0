"use client";

import Logout from "@/components/Logout";
import { useUser } from "@auth0/nextjs-auth0/client";
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="card w-full relative max-w-[300px]">
        <div className="card-content backdrop-blur-sm rounded-lg shadow-lg p-8 text-center border-2 border-[#635dff]">
          <div className="mb-6">
            {user?.picture && (
              <img
                src={user?.picture}
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
            )}
          </div>
          <h1 className="text-2xl text-black font-bold mb-2">{user?.name}</h1>
          <p className="text-gray-600 mb-4">{user?.email}</p>
          <p className="text-sm text-gray-500">
            {user?.email_verified ? "Email verified" : "Email not verified"}
          </p>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Profile;
