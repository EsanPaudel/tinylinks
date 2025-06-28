// "use client"
import Image from "next/image";
import banner from "@/assets/banner-img.png";
import { Unlink } from "lucide-react";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
// import { useSession } from 'next-auth/react';
const Hero = async () => {
  const session = await getServerSession(authOptions);
  // const { data: session, status } = useSession()

  return (
    <main className="hero min-h-screen bg-[#e3f3ff] flex items-center px-20 py-20  ">
      <div className="flex items-start justify-center gap-5 flex-col ">
        <p className="rounded-full bg-pink-100 text-red-500 font-medium py-1 px-2 w-max">
          Easy Link Shortening
        </p>
        <h1 className="text-6xl font-bold ">
          Tiny short URL & QR code generator
        </h1>
   
        <p className=" text-gray-400 text-xl font-light">
          A short link allows you to collect so much data about your customers &
          their behaviors.
        </p>
        <div className="shorten bg-white rounded-full py-2 pl-5 pr-2 flex items-center justify-center gap-3 ">
          <Unlink color="gray" size={"20px"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Long URL"
            className="border-none outline-none"
          />
          <Link href={session?"/dashboard":"/auth/login"}><button className="bg-blue-500 px-6 py-3 rounded-full text-white font-medium  hover:text-white hover:bg-blue-300 cursor-pointer transition duration-500" >
            Shorten
          </button></Link>
        </div>
      </div>
      <div className="w-[70vw]">
        <Image src={banner} alt="banner" />
      </div>
    </main>
  );
};

export default Hero;
