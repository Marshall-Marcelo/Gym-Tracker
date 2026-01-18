import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  options: FooterOptions[];
}

export interface FooterOptions {
  icon: React.ReactNode;
  label: string;
  url: string;
}

export const Footer = ({ options }: FooterProps) => {
  return (
    <footer className="fixed bottom-0 h-14 bg-gray-200 w-full flex justify-between items-center px-8">
      {options.map((option) => {
        return (
          <Link key={option.label} to={option.url}>
            <div className="flex flex-col items-center gap-1">
              {option.icon}
              {/* <span className="text-xs font-thin">{option.label}</span> */}
            </div>
          </Link>
        );
      })}
    </footer>
  );
};
