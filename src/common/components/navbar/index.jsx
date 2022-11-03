import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { LinkedItem } from "@components/LinkedItem";
import { pages } from "./pages";
import { Menu } from "@elements/Menu";
import { MenuIcon } from "@heroicons/react/outline";
import { SlideOver } from "@elements/SlideOver";

const NavLinks = ({ className }) => (
  <div className={className}>
    {pages.map((page) =>
      page.items.length === 0 ? (
        <LinkedItem
          key={page.name}
          href={page.href}
          className="uppercase text-white font-bold !text-sm hover:bg-[#484e76] p-2"
        >
          {page.name}
        </LinkedItem>
      ) : (
        <Menu
          key={page.name}
          name={page.name}
          menuItem={page.items}
          href={page.href}
          buttonClassName="uppercase !text-white font-bold !text-sm hover:bg-[#484e76] p-2"
        />
      )
    )}
  </div>
);

// const SubNavLinks = ({ page }) => (
//   <>
//     {page?.items?.length === 0 ? (
//       <LinkedItem
//         key={page.name}
//         href={page.href}
//         className="uppercase text-white font-bold !text-sm hover:bg-[#484e76] p-2"
//       >
//         {page.name}
//       </LinkedItem>
//     ) : (
//       page.items.map((item) => (
//         <LinkedItem
//           key={item.name}
//           href={item.href}
//           className="uppercase text-white font-bold !text-sm hover:bg-[#484e76] p-2"
//         >
//           {item.name}
//         </LinkedItem>
//       ))
//     )}
//   </>
// );

export const Navbar = ({ breadcrumbItem = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        <div className="h-12 bg-[#1979a9]"></div>

        <div className="flex items-center justify-between md:justify-start gap-4 bg-[#373F6E]">
          <img src="/assets/vitlogo.png" />

          <NavLinks className="hidden md:flex items-center flex-wrap" />

          <button
            className="block md:hidden mr-4"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        <Breadcrumb bgColor={"#c5383a"} color={"white"} p={2}>
          {breadcrumbItem.map(({ href, name }) => (
            <BreadcrumbItem key={name}>
              <LinkedItem href={href}>{name}</LinkedItem>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </header>

      <SlideOver isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="grid">
          <NavLinks className="grid items-center flex-wrap" />
        </div>
      </SlideOver>
    </>
  );
};
