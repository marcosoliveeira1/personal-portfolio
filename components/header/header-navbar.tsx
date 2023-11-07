'use client';

import { site, contact } from "../../lib/data";
import {
  FaBars,
  FaEnvelope,
  FaPhoneAlt,
  FaPlus,
} from "react-icons/fa";
import { subtitleBold } from "@/app/fonts";
import { SocialIcons } from "./social-links";
import logoIcon from "../../public/logo.svg"
import Image from "next/image";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import { useState } from "react";
import { SectionName } from "@/lib/types";
import Link from "next/link";

export const HeaderNavbar = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [nav, setNav] = useState(false);


  const goToSection = (name: SectionName) => {
    setTimeOfLastClick(Date.now());
    setActiveSection(name);
    if (nav) setNav(false);
  }

  const toggleMobileMenu = () => {
    setNav(!nav);
  }


  return (
    <>
      <div className="w-full top-2 lg:px-0 px-5 fixed lg:top-[50px] z-[50] drop-shadow-md opacity-90">
        <div className="container px-4 p-[8px] rounded-lg bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 w-full justify-between">
              <div>
                <Link href="/" className={`${subtitleBold.className} text-2xl sm:text-2xl md:text-4xl text-black flex items-center`}>
                  <Image src={logoIcon} alt={""} width={60} />
                  {site.title}
                </Link>
              </div>
              {/* Navbar */}
              <ul className="hidden lg:flex lg:items-center gap-[35px] ">
                {links.map(({ name, hash }) => (
                  <li key={hash}>
                    <Link href={hash}
                      className={`font-medium text-[18px] pb-2 text-gray-600`}
                      onClick={() => goToSection(name)}
                    >{name}</Link>
                  </li>
                ))}
              </ul>
              {/* Navbar */}
            </div>
            <div className="flex items-center">
              <button
                className="bg-sky-700 p-3 rounded-lg lg:hidden"
                onClick={() => toggleMobileMenu()}
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
          <li className="mb-[45px]" onClick={() => toggleMobileMenu()}>
            <FaPlus className="rotate-45 text-sky-700" size={24} />
          </li>
          <li className="mb-8">
            <Link href="#" className={`${subtitleBold.className} text-2xl sm:text-2xl md:text-4xl text-black`}>
              &lt;
              {site.title}
              /&gt;
            </Link>
          </li>

          {links.map(({ name, hash }) => (
            <li className="mb-8" key={hash}>
              <Link
                href={hash}
                onClick={() => goToSection(name)}
                className="relative text-black text-[18px] before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:bg-gray-300 before:bottom-[-10px]  ">
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" px-[38px] ">
          <span className="flex justify-between mb-6">
            <p className="text-black text-[18px] font-medium">Contacte-me</p>
            <SocialIcons social={contact.social} classes="flex justify-end items-center gap-[20px]" />
          </span>


          <div className="flex items-center gap-[10px] mb-3">
            <FaEnvelope size={18} className="inline text-sky-700" />
            <span className="font-[500] ">{contact.email}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaPhoneAlt size={18} className="inline text-sky-700" />
            <span className="font-[500] ">{contact.phone}</span>
          </div>
        </div>
      </div>
      <div
        className={` fixed z-[998] top-0 right-0 lg:right-[-100%]  h-screen opacity-[1] lg:opacity-0 transition-all overflow-hidden bg-black/50 ${nav ? "w-full" : "w-0"
          } `}
      ></div>
    </>
  );
};
