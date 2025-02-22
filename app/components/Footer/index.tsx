"use client";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Twitter,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import navigationData from "../Header/Nav.json";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <div className="bg-muted-900  text-white">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 pb-4 gap-8 min-h-[400px] pt-10">
        <div className="flex flex-col gap-4">
          <Link href={"/"} className="relative w-[150px] h-[40px]">
            <Image
              src="/images/snowveil6.svg"
              alt="logo"
              fill
              priority
              className="w-full h-full object-contain"
            />
          </Link>

          <h2 className="text-xl font-bold mb-4 text-white font-modicaMedium">
            Want to Take Tour Packages?
          </h2>
          <button
            className="max-w-[150px] bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-md lg:text-md md:text-sm text-xs transition duration-300 font-bold"
            onClick={handleClick}
          >
            Book A Trip
          </button>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold ">Quick Links</h3>
          <div className="flex flex-col gap-4 py-4">
            {navigationData.map((item, index) => (
              <a href={item.path} key={index}>
                <span className=" transition  duration-300  hover:text-green-500 text-md">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-[20px] font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-5 pt-5">
            <div className="flex gap-4 items-center">
              <PhoneCall size={25} className="text-yellow-500" />
              <div>
                <Link href="/">
                  <p className="text-md">+916006089901</p>
                </Link>
                <Link href="/">
                  <p className="text-md">+916005252876</p>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MessageCircle size={25} className="text-yellow-500" />
              <div>
                <Link href="/">
                  <p className="text-md">+916006089901</p>
                </Link>
                <Link href="/">
                  <p className="text-md">+916005252876</p>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Mail size={25} className="text-yellow-500" />
              <div>
                <Link href="/">
                  <p className="text-md break-all">
                    snowveiladventures@gmail.com
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MapPin size={40} className="text-yellow-500" />
              <div>
                <p className="text-md">
                  Reshi Complex, Nambalnar Tangmarg Baramulla - 193402
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-5 ">
          <h3 className="text-[20px] font-semibold">Follow Us</h3>
          <div className="flex gap-5 cursor-pointer">
            <Instagram className=" transtion  duration-300 hover:-translate-y-1 hover:text-green-500" />
            <Facebook className=" transtion  duration-300 hover:-translate-y-1 hover:text-green-500" />
            <Twitter className=" transtion  duration-300 hover:-translate-y-1 hover:text-green-500" />
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto pb-10">
        <hr className="border-gray" />
        <p className="text-center pt-4 text-md">
          Copyright &copy; <span className="text-green-500 ">Snowveil</span>{" "}
          <span>Adventures</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
