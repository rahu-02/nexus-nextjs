import React from "react";
import { Text, Heading, Button, Img } from "./..";

interface Props {
  className?: string;
  uiuxdesigntext?: string;
  wecanmaketext?: string;
}

export default function HomepageColumnclockOne({
  uiuxdesigntext = "UIUX Design",
  wecanmaketext = "We can make your website or application design better with this service",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start cursor-pointer `}>
      <Button color="red_300" shape="round" className="w-[46px]">
        <Img src="img_clock.svg" width={46} height={46} />
      </Button>
      <div className="flex flex-col items-start gap-[13px] self-stretch">
        <Heading size="xl" as="h4">
          {uiuxdesigntext}
        </Heading>
        <Text size="xs" as="p" className="w-full leading-[30px]">
          {wecanmaketext}
        </Text>
      </div>
    </div>
  );
}
