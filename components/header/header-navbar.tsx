'use client';

import { CONFIG } from "@/constants";
import {
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import { logo } from "@/app/fonts";
import { SocialIcons } from "./social-links";

export const HeaderNavbar = () => {

  const { contact } = CONFIG;

  const [nav, setNav] = useState(false);
  const handelNav = (url: string | undefined = undefined) => {
    setNav(!nav);
    if (url) console.log('implement roll to');

  };


  return (
    <>
      <div className="Navbar w-full top-2 lg:px-0 px-5 fixed lg:top-[50px] z-[50] drop-shadow-md">
        <div className="container px-4 p-[16px] rounded-lg bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 w-full justify-between">
              <div>
                <a href="#" className={`${logo.className} text-2xl sm:text-2xl md:text-4xl text-black`}>
                  &lt;
                  {CONFIG.site.title}
                  /&gt;
                </a>
              </div>
              {/* Navbar */}
              <ul className="hidden lg:flex lg:items-center gap-[35px] ">
                {CONFIG.navbar.map(({ name, url }) => (
                  <li key={url}>
                    <a href={url} className="text-black font-medium text-[18px] ">{name}</a>
                  </li>
                ))}
              </ul>
              {/* Navbar */}
            </div>
            <div className="flex items-center">
              <button
                className="bg-blue-600 p-3 rounded-lg lg:hidden"
                onClick={() => handelNav()}
              >
                <FaBars size={25} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={` fixed z-[999] top-0 right-0 lg:right-[-100%] h-screen opacity-[1] lg:opacity-0  overflow-hidden bg-white transition-all delay-[0.5s] ${nav ? "w-100 mw-[380px]" : "w-0"
          } `}
      >
        <ul className="py-[70px] px-[38px] ">
          <li className="mb-[45px]" onClick={() => handelNav()}>
            <FaPlus className="rotate-45 text-blue-600" size={24} />
          </li>
          <li className="mb-8">
            <a href="#" className={`${logo.className} text-2xl sm:text-2xl md:text-4xl text-black`}>
              &lt;
              {CONFIG.site.title}
              /&gt;
            </a>
          </li>

          {CONFIG.navbar.map(({ name, url }) => (
            <li className="mb-8" key={url}>
              <p onClick={() => handelNav(url)} className="relative text-black text-[18px] before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:bg-gray-300 before:bottom-[-10px]  ">
                {name}
              </p>
            </li>
          ))}
        </ul>
        <div className=" px-[38px] ">
          <span className="flex justify-between pr-[25px] mb-6">
            <p className="text-black text-[18px] font-medium">Contacte-me</p>
            <SocialIcons social={contact.social} classes="flex justify-end items-center gap-[20px]" />
          </span>


          <div className="flex items-center gap-[10px] mb-3">
            <FaEnvelope size={18} className="inline text-blue-600" />
            <span className="font-[500] ">{contact.email}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaPhoneAlt size={18} className="inline text-blue-600" />
            <span className="font-[500] ">{contact.phone}</span>
          </div>
        </div>
      </div>
      <div
        className={` fixed z-[998] top-0 right-0 lg:right-[-100%]  h-screen opacity-[1] lg:opacity-0 transition-all overflow-hidden delay-[0.3s] bg-black/50 ${nav ? "w-full" : "w-0"
          } `}
      ></div>
    </>
  );
};
