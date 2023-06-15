import { Flex } from "@chakra-ui/layout";
import {
  Box,
  Text,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { brandColor, darkColor } from "@/constants/design";
import { Image, Link } from "@chakra-ui/next-js";
import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();
  return (
    <Box
      as="nav"
      pos="relative"
      top={0}
      zIndex="999"
      bg="transparent"
      overflowY={"clip"}
      shadow="lg"
      color="white"
    >
      <Flex
        px={"5"}
        pos="sticky"
        bg={darkColor}
        h={"20"}
        color="white"
        alignItems={"center"}
        justify={"space-between"}
      >
        <Flex alignItems={"center"} gap={5}>
          <Box as={Link} href="/" overflow={"clip"}>
            <Image
              src="/logo-transparent.png"
              height={"2000"}
              width={"2000"}
              h={"10"}
              w={"24"}
              alt="Loyauxx logo"
            />
          </Box>
          {[
            { name: "Contests", link: "/contests" },
            { name: "About Loyauxx", link: "/about" },
          ].map(({ name, link }) => (
            <Link display={["none", "block"]} href={link}>
              <Text>{name}</Text>
            </Link>
          ))}
        </Flex>
        <Box display={["block", "none"]}>
          <Button
            ref={btnRef}
            size="md"
            bg="transparent"
            // border="1px"
            // borderColor="whiteAlpha.400"
            p="1"
            onClick={onOpen}
          >
            <Image
              src="/icons/hamburger-menu-2.png"
              height={"7"}
              width={"7"}
              objectFit="cover"
              alt=""
            />
          </Button>
          <Drawer
            size={"xs"}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent 
            // zIndex={"99999"}
            >
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>

              <DrawerBody>
                {/* <Input placeholder='Type here...' /> */}
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
        <Flex alignItems={"center"} display={["none", "flex"]} gap={5}>
          <Text as={Link} href="/login" cursor={"pointer"}>
            Log in
          </Text>
          <Button
            bg={"#AB9307"}
            color="white"
            as={Link}
            href="/signup"
            fontWeight={"medium"}
            _hover={{ bg: "#ab92077e" }}
            transition={"all"}
            transitionDuration={"0.2s"}
          >
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
