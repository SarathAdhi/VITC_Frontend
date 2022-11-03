import {
  Menu as MenuComponent,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

import React from "react";

export const Menu = ({ name, menuItem = [], buttonClassName = "", href }) => {
  return (
    <MenuComponent>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={"button"}
            href={href || "#"}
            _hover={{ textDecoration: "none" }}
            className={buttonClassName}
          >
            <div className="flex items-center gap-1">
              <span>{name}</span>

              {isOpen ? (
                <ChevronUpIcon className="-mt-0.5 w-4 h-4 text-white" />
              ) : (
                <ChevronDownIcon className="-mt-0.5 w-4 h-4 text-white" />
              )}
            </div>
          </MenuButton>

          <MenuList className="-mt-2 !bg-black/90 !border-0 !border-t-4 !rounded-none border-[#3274b7] p-0">
            {menuItem.map((item) => (
              <MenuItem
                key={item.name}
                color={"white"}
                _focus={{ backgroundColor: "none" }}
                _hover={{ backgroundColor: "#3274b7" }}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </MenuComponent>
  );
};
