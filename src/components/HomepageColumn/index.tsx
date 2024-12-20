import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  userimage?: string;
  sarahjae?: string;
  branding?: string;
}

export default function HomepageColumn({
  userimage = "img_rectangle_16.png",
  sarahjae = "Sarah Jae",
  branding = "Branding Specialist",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full`}>
      <Img
        src={userimage}
        width={373}
        height={460}
        alt="image"
        className="h-[auto] w-full rounded-[10px] object-cover md:h-auto"
      />
      <div className="flex flex-col items-center gap-3">
        <Heading size="xl" as="h4" className="!text-gray-800_01">
          {sarahjae}
        </Heading>
        <Text as="p" className="!text-black-900_68">
          {branding}
        </Text>
      </div>
    </div>
  );
}
