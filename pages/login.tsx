import { Image, Link } from "@chakra-ui/next-js";
import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";

const Page = () => {
  return (
    <Flex
      justify="center"
      alignItems={"center"}
      bg="#131119"
      color="white"
      w="full"
      minH="90vh"
      bgImage="/img/photo-1518972559570-7cc1309f3229.jpg"
      bgRepeat={"no-repeat"}
      bgPos="center"
      bgSize={"cover"}
    >
      <Flex
        h={"max"}
        w="max"
        shadow={"lg"}
        p="5"
        minW="60vh"
        rounded="xl"
        bg="black"
        flexDir={"column"}
      >
        <Text fontWeight={"bold"} fontSize={"xl"}>
          Login
        </Text>
        <Text opacity={0.7} fontSize={"sm"}>
          Welcome Back!
        </Text>
        <Input
          mt="5"
          bg="whiteAlpha.300"
          borderColor={"whiteAlpha.300"}
          placeholder="Enter Email or Username"
          height={"12"}
          w="full"
        />
        <Input
          mt="5"
          bg="whiteAlpha.300"
          borderColor={"whiteAlpha.300"}
          placeholder="Password"
          height={"12"}
          w="full"
        />
        <Button
          w="full"
          mt="5"
          p="5"
          rounded="2xl"
          fontWeight={"normal"}
          colorScheme="yellow"
          bg="#AB9307"
          color="white"
        >
          Login
        </Button>
        <Divider mt="5" />
        <Flex
          py="2"
          mt="5"
          justify="center"
          align={"center"}
          gap="3"
          rounded="xl"
          border="1px"
          borderColor={"whiteAlpha.400"}
          bg="white"
          _hover={{}}
          _active={{}}
          cursor={"pointer"}
          color={"black"}
        >
          <Image src="/icons/google.png" height={"7"} width="7" alt="" />
          <Text>Sign In With Google</Text>
        </Flex>
        <Text mt="5">
          New to Loyauxx?{" "}
          <Box color="lightskyblue" ml="1" as={Link} href="/signup">
            {" "}
            Sign up{" "}
          </Box>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Page;
