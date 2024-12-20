import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    red_300: "bg-red-300 shadow-xs",
    cyan_400: "bg-cyan-400 shadow-2xl",
    lime_800: "bg-lime-800 shadow-3xl",
    red_400_01: "bg-red-400_01",
    green_600: "bg-green-600 shadow-xl text-white-A700",
  },
  outline: {
    black_900: "border-black-900 border-[3px] border-solid text-black-900",
  },
} as const;
const sizes = {
  xl: "h-[68px] px-[26px]",
  md: "h-[50px] px-[35px] text-xl",
  lg: "h-[67px] px-[35px] text-base",
  xs: "h-[38px] px-[11px]",
  sm: "h-[46px] px-[11px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "red_400_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
