import Image from "next/image";
import banner from "@/assets/banner-img.png";
import About from "./componets/About";

export default function Home() {
  return (
    <div>
      <main className="hero min-h-screen bg-[#e3f3ff] flex items-center px-20 py-20  ">
        <div className="flex items-start justify-center gap-5 flex-col ">
          <p className="rounded-full bg-pink-100 text-red-500 font-medium py-1 px-2 w-max">
            Easy Link Shortening
          </p>
          <h1 className="text-6xl font-bold ">
            Tiny short URL & QR code generator
          </h1>

          <p className=" text-gray-400 text-xl font-light">
            A short link allows you to collect so much data about your customers
            & their behaviors.
          </p>
        </div>
        <div className="w-[70vw]">
          <Image src={banner} alt="banner" />
        </div>
      </main>
      <About />
    </div>
  );
}
