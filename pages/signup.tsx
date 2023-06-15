import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Flex
      justify="center"
      alignItems={"center"}
      bg="#131119"
      color="white"
      w="full"
      minH="90vh"
      py="20"
      bgImage="/img/photo-1518972559570-7cc1309f3229.jpg"
      bgRepeat={"no-repeat"}
      bgPos="center"
      bgSize={"cover"}
    >
      <Flex
        h={"max"}
        w="70vh"
        shadow={"lg"}
        p="5"
        minW="60vh"
        rounded="xl"
        bg="black"
        flexDir={"column"}
      >
        <Text fontWeight={"bold"} fontSize={"xl"}>
          Sign Up
        </Text>
        <Text opacity={0.7} fontSize={"sm"}>
          Explore a world of music and uncover new sounds at Loyauxx.
        </Text>
        <Flex gap={"5"}>
          <Tooltip
            bg="gray"
            rounded="lg"
            label={
              <Text p="2" color="white" textAlign={"center"}>
                Your artist name displayed on your profile
              </Text>
            }
            hasArrow
          >
            <Input
              flex="2"
              mt="5"
              bg="whiteAlpha.300"
              borderColor={"whiteAlpha.300"}
              placeholder="Enter Artist Name"
              height={"12"}
              w="full"
            />
          </Tooltip>
          <InputGroup flex="3" mt="5" w="full">
            <InputLeftAddon
              h={"12"}
              bg="gray"
              borderColor="whiteAlpha.300"
              children="@"
            />
            <Tooltip
              bg="gray"
              rounded="lg"
              label={
                <Text p="2" color="white" textAlign={"center"}>
                  Username should not contain any spaces!{" "}
                  <Text>Examples - dj_pro_18, kevinRodgers, etc</Text>
                </Text>
              }
              hasArrow
            >
              <Input
                h={"12"}
                bg="whiteAlpha.300"
                borderColor={"whiteAlpha.300"}
                placeholder="Enter Username"
              />
            </Tooltip>
          </InputGroup>
        </Flex>

        <Input
          mt="5"
          bg="whiteAlpha.300"
          borderColor={"whiteAlpha.300"}
          placeholder="Enter Email"
          height={"12"}
          w="full"
        />
        <InputGroup size='md' mt="5" w="full" borderColor={"transparent"}>
          <Input
            bg="whiteAlpha.300"
            borderColor={"whiteAlpha.300"}
            placeholder="Enter Password"
            height={"12"}
          />
          <InputRightAddon
            height={"12"}
            children={
              <Button h='full' w='full'>
                <Image
                  src="/icons/closed-eye.png"
                  height="4"
                  width="4"
                  alt=""
                />
              </Button>
            }
          />
        </InputGroup>
        <InputGroup size='md' mt="5" w="full" borderColor={"transparent"}>
        <Input
          bg="whiteAlpha.300"
          borderColor={"whiteAlpha.300"}
          placeholder="Confirm Password"
          height={"12"}
        />
          <InputRightAddon
            height={"12"}
            children={
              <Button h='full' w='full'>
                <Image
                  src="/icons/closed-eye.png"
                  height="4"
                  width="4"
                  alt=""
                />
              </Button>
            }
          />
        </InputGroup>
     
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
          Already Signed Up?{" "}
          <Box color="lightskyblue" ml="1" as={Link} href="/login">
            {" "}
            Login{" "}
          </Box>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Page;
