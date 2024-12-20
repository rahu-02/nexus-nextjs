"use client";
import React from "react";
import { Button, Img, Heading, TextArea, Input, Text, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import X from "@mui/icons-material/X";
import EmailIcon from '@mui/icons-material/Email';


export default function ContactPage() {

  return (
    <div className="w-full bg-white-A700">
      <div className="flex flex-col items-center">
        <Header activecontact="!text-red-400_01" activedotcontact= {<div className="h-[6px] w-[6px] rounded-[3px] bg-red-400_01" />}/>
        <div className="container-sm mt-[54px] flex w-full max-w-[1192px] md:p-5">
          <Slider/>
        </div>
        <div className="mx-auto mt-[100px] flex w-full max-w-[1191px] items-center gap-[41px] md:flex-col md:p-5">
          <div className="flex flex-1 flex-col items-start gap-[23px] rounded-[20px] bg-white-A700 py-[72px] pl-[72px] pr-14 shadow-lg md:self-stretch md:p-5">
            <div className="flex w-[89%] flex-col items-start self-center md:w-full">
              <Heading size="lg" as="h2" className="!text-gray-600">
                Send Message
              </Heading>
              <div className="mt-[13px] h-px w-full self-stretch bg-gray-200" />
              <div className="mt-[23px] flex flex-col gap-[30px] self-stretch">
                <div className="flex gap-[30px] sm:flex-col">
                  <Input shape="round" type="text" name="name" placeholder={`Your Name`} className="w-full" />
                  <Input shape="round" type="email" name="email" placeholder={`Your Email`} className="w-full" />
                </div>
                <TextArea
                  shape="round"
                  name="your_message"
                  placeholder={`Your Message`}
                  className="font-bold text-gray-400 sm:py-5 sm:pr-5"
                />
              </div>
            </div>
            <Button
              color="green_600"
              size="md"
              rightIcon={<Img src="img_save.svg" width={18} height={18} alt="save" className="h-[18px] w-[18px]" />}
              className="mb-[30px] ml-[39px] min-w-[182px] gap-[13px] rounded-[25px] md:ml-0 sm:px-5"
            >
              Send
            </Button>
          </div>
          <div className="mb-3 flex w-[32%] flex-col gap-[30px] rounded-[20px] bg-white-A700 p-12 shadow-lg md:w-full md:p-5">
            <div className="mt-6 flex flex-col gap-[33px]">
              <div className="flex flex-col items-start gap-6">
                <Heading size="lg" as="h3" className="!text-gray-600">
                  Contact Information
                </Heading>
                <div className="h-px w-full self-stretch bg-gray-200" />
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-[25px]">
                  <Img src="img_frame_666.svg" width={24} height={24} alt="image" className="h-[24px] w-[24px]" />
                  <Heading size="s" as="h4" className="self-end !text-gray-400_01">
                    hello@mail.com
                  </Heading>
                </div>
                <div className="flex items-center gap-[25px]">
                  <Img src="img_globe.svg" width={24} height={24} alt="globe" className="h-[24px] w-[24px]" />
                  <Heading size="s" as="h5" className="self-start !text-gray-400_01">
                    www.abc.com
                  </Heading>
                </div>
                <div className="flex items-start gap-[25px]">
                  <Img src="img_linkedin.svg" width={24} height={24} alt="linkedin" className="h-[24px] w-[24px]" />
                  <Heading size="s" as="h6" className="!text-gray-400_01">
                    Sudirman street, holgan, melbourne
                  </Heading>
                </div>
                <div className="flex items-center gap-[25px]">
                  <Img src="img_call.svg" width={24} height={24} alt="call" className="h-[24px] w-[24px]" />
                  <Heading size="s" as="h6" className="!text-gray-400_01">
                    1234 - 5678
                  </Heading>
                </div>
              </div>
            </div>
            <div className="mb-[25px] flex flex-col items-end gap-[41px]">
              <div className="mr-2 flex flex-col items-start gap-6 self-stretch md:mr-0">
                <Heading size="lg" as="h5" className="!text-gray-600">
                  Social Media
                </Heading>
                <div className="h-px w-full self-stretch bg-gray-200" />
                <div className="flex gap-[19px]">
                  <Button shape="square" className="w-[47px] bg-transparent">
                    <InstagramIcon/>
                  </Button>
                  <Button shape="square" className="w-[47px] bg-transparent">
                    <X/>
                  </Button>
                  <Button shape="square" className="w-[47px] bg-transparent">
                    <FacebookIcon/>
                  </Button>
                  <Button shape="square" className="w-[47px] bg-transparent">
                    <EmailIcon/>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[108px] flex w-[91%] self-start md:w-full md:p-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
