"use client";
import { Link2, Repeat, Cog, LogOut } from "lucide-react";
import Link from "next/link";
import Pributton from "./primary-btn";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import profilePic from "@/assets/user.jpg";
import { useEffect, useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!menu) {
      const timeOut = setTimeout(() => {
        setMenu(true);
      }, 5000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [menu]);

  return (
    <nav className="flex items-center justify-between fixed w-full top-0 bg-transparent p-4 px-20 backdrop-blur-2xl z-10">
      <Link
        href="/"
        className="flex font-bold gap-2 text-2xl items-center justify-center"
      >
        <Link2 size={"30px"} />
        Tinylinks
      </Link>

      {status === "loading" ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : session?.user ? (
        <div className="flex gap-4 items-center justify-center">
          <Image
            src={session.user.image || profilePic}
            alt="profile pic"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
          <Link href={"/dashboard"}>
            <Pributton text={"Dashboard"} padding={1} />
          </Link>
        </div>
      ) : (
        <Link href="/auth/login">
          <Pributton text={"Login"} padding={1} />
        </Link>
      )}

      {/* Dropdown Menu */}
      {!menu && session?.user && (
        <div className="absolute top-16 right-10 bg-white p-4 rounded-xl shadow-xl backdrop-blur-2xl flex items-center justify-center flex-col gap-3">
          <div className="flex items-center gap-4">
            <Image
              src={session.user.image || profilePic}
              alt="profile pic"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-bold">{session.user.name}</p>
              <p className="text-sm text-gray-500">{session.user.email}</p>
            </div>
          </div>
          <hr className="border-gray-500  w-full" />
          <div className="text-gray-600 flex flex-col gap-2 items-start">
            <Link href={"/dashboard"}>
              <p className="flex gap-2 items-center justify-center hover:text-gray-800 ">
                <Cog size={18} />
                Dashboard
              </p>
            </Link>
            <Link href={"/auth/login"}>
              <p className="flex gap-2 items-center justify-center hover:text-gray-800 ">
                <Repeat size={18} />
                Switch Account
              </p>
            </Link>
            <button
              className="flex gap-2 items-center justify-center cursor-pointer hover:text-gray-800"
              onClick={() => {
                signOut();
              }}
            >
              <LogOut size={18}/>
              LogOut
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
