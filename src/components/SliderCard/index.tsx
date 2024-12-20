import React from "react";
import { Text } from "../Text";
import { Img } from "../Img";
import { Heading } from "../Heading";

const SliderCard = () => {
  return (
    <div className="flex flex-col gap-5 rounded-[10px] w-[400px] bg-white-A700 p-[30px] shadow-md sm:p-5">
      <Text size="s" as="p" className="ml-1.5 leading-[30px] md:ml-0">
        I am very satisfied with the work on the Nexus team. good service,
        satisfying work results and can also increase my business turnover.
        Thank you so much to the Nexus team.
      </Text>
      <div className="mb-[11px] ml-1.5 flex gap-[25px] md:ml-0">
        <Img
          src="img_rectangle_52.png"
          width={49}
          height={49}
          alt="image"
          className="h-[auto] w-[auto] rounded-[12px] object-cover"
        />
        <div className="flex flex-col items-start gap-1">
          <Heading size="lg" as="h3" className="!font-semibold">
            John Richard
          </Heading>
          <Text size="xs" as="p">
            Businessman
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
