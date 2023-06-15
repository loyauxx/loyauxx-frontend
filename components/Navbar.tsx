import { Flex } from "@chakra-ui/layout";
import Image from "next/image";
import { Box, Text, Button } from '@chakra-ui/react';
import { brandColor, darkColor } from "@/constants/design";
import Link from 'next/link'
const Navbar = () => {
  return (
    <Box 
    as="nav"
    pos="relative"
    top={0}
    zIndex="9999"
    bg="transparent"
    overflowY={'clip'}
    shadow='lg'
    color="white"
    >
      <Flex px='5' pos='sticky' bg={darkColor} h="20" color='white' alignItems={'center'} justify={'space-between'}>
        <Flex alignItems={'center'} gap={5}>
          <Box as={Link} href="/" width={'32'}  overflow={'clip'} ml={-5}>
            <Image
              src="/logo-transparent.png"
              height={1000}
              width={1000}
              alt="Loyauxx logo"
            />
          </Box>
          {[
            { name: "Contests", link: "/contests" },
            { name: "About Loyauxx", link: "/about" },
          ].map(({ name, link }) => (
            <Link href={link} >
              <Text>{name}</Text>
            </Link>
          ))}
        </Flex>
        <Flex alignItems={'center'} gap={5}>
          <Text as={Link} href="/login" cursor={'pointer'}>Log in</Text>
          <Button bg={'#AB9307'} color='white' as={Link} href="/signup" fontWeight={"medium"} _hover={{bg: "#ab92077e"}} transition={"all"} transitionDuration={"0.2s"}>
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
