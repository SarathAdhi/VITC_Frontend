import React from "react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { LinkedItem } from "@components/LinkedItem";

export const Navbar = ({ breadcrumbItem = [] }) => {
  return (
    <header className="w-full">
      <div className="h-10 bg-[#3a77a5]"></div>

      <div className="flex bg-[#373F6E]">
        <img src="/assets/vitlogo.png" />

        <div></div>
      </div>

      <Breadcrumb bgColor={"#c5383a"} color={"white"} p={2}>
        {breadcrumbItem.map(({ href, name }) => (
          <BreadcrumbItem key={name}>
            <LinkedItem href={href}>{name}</LinkedItem>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </header>
  );
};
