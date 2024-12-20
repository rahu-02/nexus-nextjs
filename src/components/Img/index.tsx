import React from "react";
import Image from "next/image";

const BASE_URL =  "/images/";

type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> &
  Partial<{
    className: string;
    src: string;
    alt: string;
    isStatic: boolean;
    width?: any;
    height?: any;
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  isStatic = false,
  ...restProps
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <Image
      className={className}
      src={isStatic ? imgSrc : BASE_URL + imgSrc}
      alt={alt}
      {...restProps}
      onError={() => {
        setImgSrc("defaultNoData.png");
      }}
    />
  );
};
export { Img };
