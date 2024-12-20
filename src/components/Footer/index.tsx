import React from "react";
import { Img, Heading } from "./..";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center w-full pt-[47px] px-[47px] md:pt-5 md:px-5 rounded-tr-[50px] bg-gray-800`}
    >
      <div className="mx-auto mt-[19px] flex w-full max-w-[1114px] items-start justify-between gap-5 md:flex-col">
        <div className="flex w-[69%] flex-col items-start gap-1 md:w-full">
          <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
            <Img
              src="img_footer_logo.png"
              width={141}
              height={50}
              alt="footerlogo"
              className="h-[50px] w-[141px] object-contain"
            />
            <div className="mt-[25px] flex">
              <div className="flex items-center">
                <div className="flex flex-col items-start gap-[50px] px-10">
                  <Heading size="lg" as="h5" className="tracking-[4.00px] !text-white-A700">
                    ABOUT
                  </Heading>
                  <ul className="flex flex-col gap-[29px]">
                    <li>
                      <Link href=".././about" rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.90px] !text-white-A700">
                          About
                        </Heading>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Heading as="h6" className="tracking-[0.90px] !text-white-A700">
                          What we do
                        </Heading>
                      </Link>
                    </li>
                    <li>
                      <Link href=".././works" rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.90px] !text-white-A700">
                          Works
                        </Heading>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.90px] !text-white-A700">
                          Testimonial
                        </Heading>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-[49px]">
                  <Heading size="lg" as="h5" className="tracking-[4.00px] !text-white-A700">
                    FOLLOW US
                  </Heading>
                  <ul className="flex flex-col items-start gap-[29px]">
                    <li>
                      <Link href="#" rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.90px] !text-white-A700">
                          Dribbble
                        </Heading>
                      </Link>
                    </li>
                    <li>
                      <Link href="#"  rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.90px] !text-white-A700">
                          Instagram
                        </Heading>
                      </Link>
                    </li>
                    <li>
                      <Link href="#"  rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.90px] !text-white-A700">
                          Behance
                        </Heading>
                      </Link>
                    </li>
                    <li>
                      <Link href="#"  rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.90px] !text-white-A700">
                          Pinterest
                        </Heading>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Heading size="xs" as="p" className="!text-white-A700">
            All Rights Reserved
          </Heading>
        </div>
        <Img
          src="img_group_710.svg"
          width={266}
          height={311}
          alt="image"
          className="mt-[120px] h-[auto] w-[24%] md:w-full"
        />
      </div>
    </footer>
  );
}
