import Login from "@/components/Login";
import Signup from "@/components/Signup";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex py-40 px-44 min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1 className="font-medium text-7xl">
        Welcome to the{" "}
        <span className="text-[#635dff] font-extrabold">Chatsapp!</span>
      </h1>
      <div className="mb-32 flex justify-center gap-6 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Login />
        <Signup />
      </div>
    </main>
  );
}
