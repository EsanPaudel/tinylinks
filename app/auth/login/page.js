"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import login from "@/assets/login.svg";
import { ArrowRight, Lock, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/");
      toast.success("Login Successful");
    } else {
      toast.error("Login Failed");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f8ff]">
      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-3xl overflow-hidden max-w-4xl w-full">
        {/* Left Illustration */}
        <div className="bg-[#e6f4ff] flex-1 flex items-center justify-center p-8">
          <div className="relative w-64 h-64">
            <Image
              src={login}
              alt="Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleLogin} className="flex-1 p-10">
          <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
          <div className="space-y-4">
            <div className="w-full px-4 py-3 rounded-full border flex items-center gap-3">
              <User2 size={20} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email here"
                value={form.email}
                onChange={handleChange}
                className="focus:outline-none"
              />
            </div>

            <div className="w-full px-4 py-3 rounded-full border flex items-center gap-3">
              {" "}
              <Lock size={20} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className=" focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <label>Remember me</label>
            </div>
            <button className="w-full bg-blue-600 text-white rounded-full py-3 flex items-center justify-center gap-2 hover:bg-blue-700">
              Login <ArrowRight size={18} />
            </button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link href={"/auth/register/"}>
                <span className="text-blue-600 cursor-pointer">SignUp</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
