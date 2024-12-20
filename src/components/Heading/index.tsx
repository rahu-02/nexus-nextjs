import React from "react";

const sizes = {
  "3xl": "text-[35px] font-bold md:text-[33px] sm:text-[31px]",
  "2xl": "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  "5xl": "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  xl: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
  "4xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  "6xl": "text-[75px] font-bold md:text-5xl",
  s: "text-[17px] font-semibold",
  md: "text-lg font-semibold",
  xs: "text-[15px] font-bold",
  lg: "text-xl font-bold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-sourcesanspro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
