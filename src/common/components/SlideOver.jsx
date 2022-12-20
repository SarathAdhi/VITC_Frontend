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
      placement="right"
      size={"full"}
      onClose={() => setIsOpen(false)}
    >
      <DrawerOverlay />

      <DrawerContent className="!bg-[#333333]">
        <DrawerCloseButton mt={2} fontSize={"md"} color={"white"} />

        <DrawerHeader bgColor={"#004c93"}>
          <H2 className="text-white">VIT</H2>
        </DrawerHeader>

        <DrawerBody className="text-center">{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
