import React from "react";
import merge from "@/utils/merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  icon?: React.ReactNode;
}

const Button = ({ label, className, icon, ...props }: ButtonProps) => {
  return (
    <button {...props} className={merge(`bg-gray-200 rounded-2xl w-fit px-8 py-2`, className)}>
      <span className="flex items-center gap-2 font-extralight">
        {label} {icon}
      </span>
    </button>
  );
};

export default Button;
