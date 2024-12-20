import React from "react";
import { Heading, Img } from "./..";
import Link from "next/link";

interface Props {
  className?: string;
  activehome?: string;
  activeabout?: string;
  activework?: string;
  activecontact?: string;
  activedothome?: React.ReactNode
  activedotabout?: React.ReactNode
  activedotwork?: React.ReactNode
  activedotcontact?: React.ReactNode
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props} className={`${props.className} flex self-stretch justify-center items-center py-[15px] `}>
      <div className="container-sm flex items-center justify-between gap-5 px-11 md:p-5 md:px-5 sm:flex-col">
        <Img
          src="img_header_logo.png"
          width={141}
          height={50}
          alt="headerlogo"
          className="h-[50px] w-[141px] object-contain"
        />
        <ul className="!mr-[9px] flex items-start gap-[61px] md:mr-0">
          <li>
            <Link href="/">
              <div className="flex flex-col items-center gap-2">
                <Heading as="h6" className={`!font-bold ${props.activehome}  hover:text-red-400_01`}>
                  Home
                </Heading>
                {props.activedothome}
                {/* <div className="h-[6px] w-[6px] rounded-[3px] bg-red-400_01" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about" className="cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <Heading as="h6" className={`!font-bold ${props.activeabout}  hover:text-red-400_01`}>
                About
              </Heading>
              {props.activedotabout}
            </div>
            </Link>
          </li>
          <li>
            <Link href="/works" className="cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <Heading as="h6" className={`!font-bold ${props.activework}  hover:text-red-400_01`}>
                Works
              </Heading>
              {props.activedotwork}
              </div>
            </Link>
          </li>
          <li>
            <Link href="contact" className="cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <Heading as="h6" className={`!font-bold ${props.activecontact}  hover:text-red-400_01`}>
                Contact
              </Heading>
              {props.activedotcontact}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
