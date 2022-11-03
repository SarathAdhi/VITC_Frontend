import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { H2 } from "@components/Text";

export const SlideOver = ({ isOpen, setIsOpen, children }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      size={"full"}
      onClose={() => setIsOpen(false)}
    >
      <DrawerOverlay />

      <DrawerContent className="!bg-[#333333]">
        <DrawerCloseButton mt={2} fontSize={"md"} color={"white"} />

        <DrawerHeader bgColor={"#3F51B5"}>
          <H2 className="text-white">VIT</H2>
        </DrawerHeader>

        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
