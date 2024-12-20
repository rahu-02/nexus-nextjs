"use client";
import React from "react";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function WorksPage() {
  return (
    <div className="w-full bg-white-A700">
      <div className="flex flex-col items-start">
        <Header activework="!text-red-400_01" activedotwork= {<div className="h-[6px] w-[6px] rounded-[3px] bg-red-400_01" />}/>
        <div className="container-sm mt-[54px] flex justify-center rounded-[90px] bg-green-A100 px-7 pt-7 md:p-5 sm:px-5 sm:pt-5">
          <div className="mt-[31px] flex w-full flex-col">
            <div className="flex w-[79%] items-start justify-between gap-5 md:w-full">
              <Img
                src="img_rectangle_57.svg"
                width={114}
                height={114}
                alt="image"
                className="h-[114px] w-[114px] rounded-[10px]"
              />
              <div className="mt-3 h-[14px] w-[14px] rounded-[7px] bg-deep_orange-A100" />
            </div>
            <div className="ml-[109px] mt-[25px] flex w-[60%] items-center justify-between gap-5 md:ml-0 md:w-full">
              <div className="h-[14px] w-[14px] self-end rounded-[7px] bg-light_blue-400" />
              <Heading size="5xl" as="h1">
                <span className="text-black-900">What we&nbsp;</span>
                <span className="text-red-400_01">do&nbsp;</span>
              </Heading>
            </div>
            <Text as="p" className="mt-[75px] w-[69%] self-center text-center leading-10 md:w-full">
              We have completed many projects from various companies in the world, we have made many of our clients feel
              happy and satisfied with the results we have provided
            </Text>
            <div className="ml-[26px] mt-1.5 flex items-start justify-between gap-5 md:ml-0">
              <Img
                src="img_group_776.svg"
                width={114}
                height={114}
                alt="image"
                className="mt-[31px] h-[114px] w-[114px]"
              />
              <div className="flex w-[22%] items-start justify-between gap-5">
                <Img
                  src="img_polygon_1.svg"
                  width={196}
                  height={196}
                  alt="polygonone"
                  className="mt-[7px] h-[196px] w-[196px] rounded-[15px]"
                />
                <div className="h-[14px] w-[14px] rounded-[7px] bg-deep_purple-800" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[111px] flex w-[87%] flex-col gap-11 self-end md:w-full md:p-5">
          <div className="flex w-[59%] flex-wrap items-start justify-between gap-5 md:w-full">
            <Heading size="4xl" as="h2">
              Latest Project
            </Heading>
            <Text as="p" className="mt-2.5">
              this is the last variety of projects we have worked on
            </Text>
          </div>
          <div className="flex flex-col items-start gap-[105px] md:gap-[78px] sm:gap-[52px]">
            <div className="container-sm relative h-[527px] pl-2.5 md:p-5">
              <div className="absolute left-0 right-0 top-[0.00px] m-auto h-[496px] w-full rounded-[30px] bg-orange-A200" />
              <div className="absolute bottom-[0.62px] right-[2.00px] m-auto h-[482px] w-[91%]">
                <Img
                  src="img_group_21.png"
                  width={785}
                  height={482}
                  alt="image"
                  className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[482px] w-[73%] object-cover"
                />
                <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[28%] flex-col items-start">
                  <Heading size="3xl" as="h3" className="!font-nunito !font-extrabold !text-white-A700">
                    Foodie.
                  </Heading>
                  <Heading size="3xl" as="h4" className="mt-[129px] w-full leading-[43px] !text-white-A700">
                    Launching website for Apps
                  </Heading>
                  <div className="mt-[68px] h-[2px] w-[24%] bg-white-A700" />
                </div>
              </div>
            </div>
            <div className="relative h-[580px] self-stretch">
              <div className="container-sm absolute bottom-0 left-[-9.00px] top-0 my-auto flex h-max flex-col items-start justify-center rounded-[30px] bg-indigo-800 py-[63px] pl-[63px] pr-14 md:p-5">
                <Heading size="3xl" as="h5" className="ml-[47px] bg-gradient bg-clip-text !text-transparent md:ml-0">
                  Floops
                </Heading>
                <Heading
                  size="3xl"
                  as="h6"
                  className="ml-[47px] mt-[190px] w-[29%] leading-[43px] !text-white-A700 md:ml-0 md:w-full"
                >
                  Landing page for Website Service
                </Heading>
                <div className="mb-[17px] ml-[47px] mt-[68px] h-[2px] w-[7%] bg-white-A700 md:ml-0" />
              </div>
              <Img
                src="img_group_790.png"
                width={711}
                height={456}
                alt="image"
                className="absolute right-[0.00px] top-[7%] m-auto h-[456px] w-[57%] object-cover"
              />
            </div>
            <div className="container-sm relative h-[580px] rounded-[30px] bg-red-A200 pl-[9px] md:h-auto md:p-5">
              <div className="ml-[101px] flex w-[26%] flex-col items-start md:ml-0">
                <div className="flex w-[58%] items-center gap-4 md:w-full">
                  <Img
                    src="img_group_51_1.png"
                    width={54}
                    height={38}
                    alt="image"
                    className="h-[38px] w-[34%] object-cover"
                  />
                  <Img
                    src="img_insight.svg"
                    width={104}
                    height={32}
                    alt="insight"
                    className="h-[32px] w-[66%] self-end"
                  />
                </div>
                <Heading size="3xl" as="h2" className="mt-[173px] w-full leading-[43px] !text-white-A700">
                  Website for creative agency
                </Heading>
                <div className="mt-[68px] h-[2px] w-[24%] bg-white-A700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[580px] w-full md:h-auto">
                <Img
                  src="img_web_1920_2_1.png"
                  width={374}
                  height={580}
                  alt="web19202one"
                  className="h-[580px] w-[32%] rounded-[30px] object-cover"
                />
                <Img
                  src="img_web_1920_2_1_580x1181.png"
                  width={1181}
                  height={580}
                  alt="web19202one"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[580px] w-full rounded-[30px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[110px] flex w-[91%] md:w-full md:p-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
