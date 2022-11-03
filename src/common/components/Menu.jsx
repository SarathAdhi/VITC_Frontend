import React from "react";
import {
  Menu as CMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { LinkedItem } from "./LinkedItem";

export const Menu = ({ menuItems = [] }) => {
  return (
    <CMenu>
      <MenuButton as={"button"}>Actions</MenuButton>
      <MenuList zIndex={999}>
        {menuItems.map((item) => (
          <LinkedItem key={item.name} href={item.href}>
            {item.name}
          </LinkedItem>
        ))}
      </MenuList>
    </CMenu>
  );
};
