"use client";
import React from "react";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomepageColumn from "../../components/HomepageColumn";

const data = [
  { userimage: "img_rectangle_16.png", sarahjae: "Sarah Jae", branding: "Branding Specialist" },
  { userimage: "img_rectangle_15.png", sarahjae: "John Doe", branding: "Product Designer" },
  { userimage: "img_rectangle_17.png", sarahjae: "Samantha", branding: "SEO Specialist" },
  { userimage: "img_rectangle_18.png", sarahjae: "Lila laconsia", branding: "UI Designer" },
  { userimage: "img_rectangle_19.png", sarahjae: "Ana louren", branding: "Illustrator" },
  { userimage: "img_rectangle_20.png", sarahjae: "Rico john", branding: "UX Principles" },
  { userimage: "img_rectangle_21.png", sarahjae: "Randy okla", branding: "Interaction Designer" },
  { userimage: "img_rectangle_22.png", sarahjae: "Sinta Marcus", branding: "UX Writer" },
  { userimage: "img_rectangle_23.png", sarahjae: "Sam Rivald", branding: "Front-end Dev" },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white-A700">
      <div className="flex flex-col items-center">
        <Header activeabout="!text-red-400_01" activedotabout= {<div className="h-[6px] w-[6px] rounded-[3px] bg-red-400_01" />}/>
        <div className="container-sm mt-[54px] flex justify-center rounded-[90px] bg-yellow-100 p-[53px] md:p-5">
          <div className="mt-[19px] flex w-[87%] items-start justify-center md:w-full md:flex-col">
            <div className="flex w-[9%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
              <Img
                src="img_ellipse_11.png"
                width={89}
                height={89}
                alt="circleimage"
                className="h-[89px] w-[89px] rounded-[50%]"
              />
              <div className="ml-[23px] h-[14px] w-[14px] rounded-[7px] bg-pink-400 md:ml-0" />
            </div>
            <div className="flex flex-1 flex-col items-end gap-[61px] md:self-stretch sm:gap-[30px]">
              <div className="mr-[134px] h-[14px] w-[14px] rounded-[7px] bg-deep_orange-A100 md:mr-0" />
              <div className="flex items-start self-stretch md:flex-col">
                <div className="relative z-[1] flex flex-1 flex-col items-center gap-[15px] md:self-stretch">
                  <Heading size="5xl" as="h1" className="w-[66%] text-center leading-[60px] md:w-full">
                    <span className="text-black-900">Get to know more&nbsp;</span>
                    <span className="text-red-400_01">about us</span>
                  </Heading>
                  <Text as="p" className="w-full text-center leading-10">
                    We are an agency engaged in the creative industry and business, we are ready to help you to improve
                    your business performance together with our great team
                  </Text>
                </div>
                <Img
                  src="img_ellipse_13.png"
                  width={89}
                  height={89}
                  alt="circleimage"
                  className="relative ml-[-11px] h-[89px] w-[89px] rounded-[50%] md:ml-0"
                />
              </div>
              <Img
                src="img_ellipse_12.png"
                width={89}
                height={89}
                alt="circleimage"
                className="mr-[89px] h-[89px] w-[89px] rounded-[50%] md:mr-0"
              />
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex w-[83%] flex-col gap-24 md:w-full md:gap-[72px] md:p-5 sm:gap-12">
          <div className="container-sm grid grid-cols-3 justify-center gap-[30px] pl-2.5 md:grid-cols-2 sm:grid-cols-1">
            {data.map((d, index) => (
              <HomepageColumn {...d} key={"about" + index} className="gap-[39px]" />
            ))}
          </div>
          <div className="container-xs flex flex-col items-start gap-[63px] sm:gap-[31px]">
            <Heading size="4xl" as="h2">
              Our Moment
            </Heading>
            <div className="flex items-center gap-[30px] self-stretch md:flex-col">
              <div className="flex w-full flex-col gap-[30px]">
                <Img
                  src="img_rectangle_29.png"
                  width={373}
                  height={205}
                  alt="image"
                  className="h-[205px] rounded-[10px] object-cover"
                />
                <Img
                  src="img_rectangle_30.png"
                  width={373}
                  height={379}
                  alt="image"
                  className="h-[379px] rounded-[10px] object-cover"
                />
              </div>
              <div className="flex w-full flex-col gap-[30px]">
                <Img
                  src="img_rectangle_31.png"
                  width={373}
                  height={379}
                  alt="image"
                  className="h-[379px] rounded-[10px] object-cover"
                />
                <Img src="img_mask_group.png" width={373} height={205} alt="image" className="h-[205px] object-cover" />
              </div>
              <div className="flex w-full flex-col gap-[29px]">
                <div className="flex flex-col gap-[30px]">
                  <Img
                    src="img_kelly_sikkema_c.png"
                    width={373}
                    height={175}
                    alt="kellysikkemac"
                    className="h-[175px] rounded-[10px] object-cover"
                  />
                  <Img
                    src="img_woman_sitting_o.png"
                    width={373}
                    height={175}
                    alt="womansittingo"
                    className="h-[175px] rounded-[10px] object-cover"
                  />
                </div>
                <Img
                  src="img_mask_group_206x374.png"
                  width={374}
                  height={206}
                  alt="image"
                  className="h-[206px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[120px] flex w-[91%] self-start md:w-full md:p-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
