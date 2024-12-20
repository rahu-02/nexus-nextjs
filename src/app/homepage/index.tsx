"use client";
import React from "react";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomepageColumn from "../../components/HomepageColumn";
import HomepageColumnclockOne from "../../components/HomepageColumnclockOne";
import Link from "next/link";
import Slider from "@/components/Slider";
import { useRouter } from "next/navigation";

const data = [
  {
    userimage: "img_rectangle_16.png",
    sarahjae: "Sarah Jae",
    branding: "Branding Specialist",
  },
  {
    userimage: "img_rectangle_15.png",
    sarahjae: "John Doe",
    branding: "Product Designer",
  },
  {
    userimage: "img_rectangle_17.png",
    sarahjae: "Samantha",
    branding: "SEO Specialist",
  },
];
const data1 = [
  {
    uiuxdesigntext: "UIUX Design",
    wecanmaketext:
      "We can make your website or application design better with this service",
  },
  {
    uiuxdesigntext: "Website Dev",
    wecanmaketext:
      "Make your business more leverage by having an optimal website and we are ready to help",
  },
  {
    uiuxdesigntext: "Branding & Product",
    wecanmaketext:
      "we can also help you in the affairs of product branding so that your products can be more riveting",
  },
];

export default function HomePage() {
  const route = useRouter();
  return (
    <div className="w-full bg-white-A700">
      <div className="flex flex-col items-center">
        <Header activehome="!text-red-400_01" activedothome= {<div className="h-[6px] w-[6px] rounded-[3px] bg-red-400_01" />}/>
        <div className="mx-auto mt-[54px] flex w-full max-w-[1181px] justify-center rounded-[35px] bg-cyan-50 py-[71px] pl-14 md:p-5 md:py-5 md:pl-5">
          <div className="my-[15px] flex w-full items-start md:flex-col">
            <div className="relative z-[1] mt-[45px] flex flex-1 flex-col gap-8 md:self-stretch">
              <Heading size="6xl" as="h1" className="leading-[80px]">
                <span className="text-black-900">
                  Maximize your business with&nbsp;
                </span>
                <span className="text-red-400_01">us</span>
              </Heading>
              <Text
                as="p"
                className="w-[73%] leading-[35px] !text-black-900_60 md:w-full"
              >
                Maximize your business with a variety of services and services
                from us
              </Text>
              <div className="flex gap-6">
                <Button
                  color="black_900"
                  size="lg"
                  className="min-w-[201px] rounded-[5px] font-bold sm:px-5"
                  onClick={()=>{route.push ('../contact')}}
                >
                  Contact Us
                </Button>
                <Button
                  color="black_900"
                  size="lg"
                  variant="outline"
                  className="min-w-[201px] rounded-[5px] font-bold sm:px-5"
                  onClick={()=>{route.push('../about')}}
                >
                  About Us
                </Button>
              </div>
            </div>
            <Img
              src="img_group_665.png"
              width={549}
              height={473}
              alt="image"
              className="relative ml-[-44px] h-[auto] w-[48%] object-cover md:ml-0 md:w-full"
            />
          </div>
        </div>
        <div className="container-sm mt-[95px] flex flex-col gap-[33px] pl-2.5 md:p-5">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <Heading size="4xl" as="h2">
              Meet our team
            </Heading>
            <Link href="../about" className="mt-[11px]">
              <Heading size="lg" as="h3" className="!text-red-400_01">
                View All
              </Heading>
            </Link>
          </div>
          <div className="flex gap-[30px] md:flex-col">
            {data.map((d, index) => (
              <HomepageColumn
                {...d}
                key={"listsarahjae" + index}
                className="gap-[39px] md:w-full"
              />
            ))}
          </div>
        </div>
        <div className="container-sm mt-[94px] flex flex-col items-center gap-[34px] pl-2.5 md:p-5">
          <Heading size="4xl" as="h2">
            What we do
          </Heading>
          <div className="flex gap-[102px] self-stretch rounded-[90px] bg-red-50 py-28 pl-28 pr-14 md:flex-col md:p-5">
            {data1.map((d, index) => (
              <HomepageColumnclockOne
                {...d}
                key={"listclockone" + index}
                className="ml-7 w-[21%] gap-9 md:ml-0 md:w-full"
              />
            ))}
          </div>
        </div>
        <div className="mt-[100px] flex flex-col items-center self-stretch">
          <div className="container-sm relative z-[2] flex flex-col items-center md:p-5">
            <Button
              size="xl"
              shape="circle"
              className="w-[68px] !rounded-[34px] border-[9px] border-solid border-white-A700 sm:px-5"
            >
              <Img src="img_contrast.svg" width={68} height={68} />
            </Button>
          </div>
          <div className="relative mt-[-34px] flex h-[525px] items-center justify-center self-stretch bg-[url(/images/img_group_2.png)] bg-cover bg-no-repeat py-[50px] md:h-auto md:py-5">
            <div className="container-xs mt-5 flex flex-col gap-[61px] md:p-5 sm:gap-[30px]">
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <Heading size="4xl" as="h2">
                  What our clients are saying
                </Heading>
                <div className="flex gap-[9px]">
                  <Button
                    size="xs"
                    shape="square"
                    className="w-[71px] slider-prev-btn"
                  >
                    <Img src="img_group_683.svg" width={71} height={38} />
                  </Button>
                  <Button
                    size="xs"
                    shape="square"
                    className="w-[71px] slider-next-btn"
                  >
                    <Img src="img_group_684.svg" width={71} height={38} />
                  </Button>
                </div>
              </div>
              <div className="mx-[15px] flex w-full max-w-[1179px] gap-[30px] md:mx-0 md:flex-col">
                <Slider />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[70px] flex w-[91%] self-start md:w-full md:p-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
