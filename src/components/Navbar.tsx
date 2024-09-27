"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-col items-center justify-center h-[100px]">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex-1 hidden sm:flex gap-3">
          <Image src={"/facebook.png"} alt="" width={20} height={20} />
          <Image src={"/instagram.png"} alt="" width={20} height={20} />
          <Image src={"/tiktok.png"} alt="" width={20} height={20} />
          <Image src={"/youtube.png"} alt="" width={20} height={20} />
        </div>
        <div className="flex-1 text-center text-4xl font-bold">
          <Link href={"/"}>Short View</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <ul className="hidden sm:flex items-center justify-end gap-5 text-xl">
            <li>
              <Link href={"/"} className="">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className="">
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/write"} className="">
                Write
              </Link>
            </li>
            <li>
              <Link href={"/login"} className="">
                Login
              </Link>
            </li>
          </ul>

          <div
            className="flex flex-col gap-[8px] sm:hidden cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className={cn("h-0.5 w-7 bg-gray-900", isOpen && 'rotate-45 origin-left')} />
            <div className={cn("h-0.5 w-7 bg-gray-900", isOpen && 'opacity-0')} />
            <div className={cn("h-0.5 w-7 bg-gray-900", isOpen && '-rotate-45 origin-left')} />
          </div>
        </div>
      </MaxWidthWrapper>
      {isOpen && (
        <div className="absolute top-[100px] w-full flex flex-col items-center justify-center h-[calc(100vh-100px)] bg-gray-200">
          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-10 text-xl">
              <li>
                <Link href={"/"} className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} className="">
                  About
                </Link>
              </li>
            </ul>
            <div className="flex-1 flex gap-3">
              <Image
                src={"/facebook.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <Image
                src={"/instagram.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <Image
                src={"/tiktok.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <Image
                src={"/youtube.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
