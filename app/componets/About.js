"use client";
import { useEffect } from "react";
import icon1 from "@/assets/services-icon1.svg";
import icon2 from "@/assets/services-icon2.svg";
import icon3 from "@/assets/services-icon3.svg";
import Image from "next/image";
import features from "@/assets/features.svg";
import { Flame } from "lucide-react";
import { User } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import qr from "@/assets/qr.svg";
import Pributton from "./primary-btn";
import Card from "./Card";
import Link from "next/link";
const About = () => {

  useEffect(() => {
    (async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      ScrollReveal().reveal(".reveal", {
        distance: "50px",
        origin: "bottom",
        duration: 500,
        delay: 200,
        interval: 200,
        easing: "ease-in-out",
        reset: true,
      });
    })();
  }, []);
  return (
    <div className="p-20">
      <section className="flex items-center gap-20 flex-col py-20">
        <div>
          <h2 className="text-center text-5xl font-bold reveal">
            One short link, infinite possibilities
          </h2>
          <p className="text-center text-xl px-30 text-gray-500 reveal">
            A short link is a powerful marketing tool when you use it carefully.
            It is not just a link but a medium between your customer and their
            destination.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Card
            icon={icon1}
            h3="Smart Targeting"
            p="Target your customers to increase your reach and redirect them to
              a relevant page. Add a pixel to retarget them in your social media
              ad campaign to capture them"
          />

          <Card
            icon={icon2}
            h3="In-Depth Analytics"
            p="Share your links to your network and measure data to optimize your
              marketing campaign's performance. Reach an audience that fits your
              needs."
          />

      
          <Card icon={icon3} h3="Digital Experience" p=" Use various powerful tools increase conversion and provide a
              non-intrusive experience to your customers without disengaging
              them."/>
        </div>
      </section>
      <section className="flex items-center justify-center gap-5 py-20">
        <Image src={features} alt="features" className="reveal" />
        <div className="flex flex-col gap-6 ">
          <p className="rounded-full bg-pink-100 text-red-500 font-medium py-1 px-2 w-max reveal">
            Sales & marketing
          </p>
          <h2 className="font-bold text-4xl reveal">
            Perfect for sales & marketing
          </h2>
          <p className="text-xl  text-gray-500 reveal">
            Understanding your users and customers will help you increase your
            conversion. Our system allows you to track everything. Whether it is
            the amount of clicks, the country or the referrer, the data is there
            for you to analyze it.
          </p>
          <ul className="flex gap-3 flex-col text-[18px] text-gray-500">
            <li className="flex gap-3 reveal">
              {" "}
              <Flame /> Redirection Tools
            </li>
            <li className="flex gap-3 reveal">
              {" "}
              <ChartColumnIncreasing />
              Powerful Statistics
            </li>
            <li className="flex gap-3 reveal">
              <User />
              Beautiful Profiles
            </li>
          </ul>
        </div>
      </section>
      <section className="flex items-center justify-center gap-5 py-20">
        <div className="flex flex-col gap-6">
          <p className="rounded-full bg-pink-100 text-red-500 font-medium py-1 px-2 w-max reveal">
            QR Code
          </p>
          <h2 className="font-bold text-4xl ">QR Codes</h2>
          <p className="text-xl  text-gray-500 ">
            Easy to use, dynamic and customizable QR codes for your marketing
            campaigns. Analyze statistics and optimize your marketing strategy
            and increase engagement.
          </p>
          <Link href={"/auth/register/"}><Pributton text={"Get Started"} padding={2}/></Link>
         
        </div>
        <Image src={qr} alt="qr" className="reveal" />
      </section>
    </div>
  );
};

export default About;
