import Head from "next/head";
import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  ScaleFade,
  ChakraProps,
  Avatar,
} from "@chakra-ui/react";
import { brandColor, darkColor } from "@/constants/design";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import AnimateOnVisible from "@/components/AnimateOnVisible";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loyauxx</title>
        <meta
          name="description"
          content="Welcome to Loyauxx, where music meets discovery."
        />
        <meta name="viewport" content="width=device, initial-scale=1" />
        <link rel="icon" href="/logo-graphics.png" />
      </Head>
      <Box pos="relative" bg={darkColor} color="white">
        <Image
          src={"/index-background.webp"}
          opacity={[0.5, 0.9]}
          w="full"
          h="90vh"
          objectFit={"cover"}
        />

        <Box
          pos={"absolute"}
          top={["3%","7%"]}
          // pt={["24", ""]}
          role="group"
          zIndex={9999}
          left={["3","10"]}
          w={["90%","50%"]}
        >
          <AnimateOnVisible>
          <Text color={brandColor} fontSize={["4xl","4xl"]}>
            Welcome to Loyauxx, where music meets discovery.{" "}
          </Text>
          </AnimateOnVisible>
          <AnimateOnVisible position={1}>

          <Text mt="2" fontSize={"lg"} opacity={0.8}>
            Explore a world of music and uncover new sounds at Loyauxx.
          </Text>
          </AnimateOnVisible>
          <AnimateOnVisible position={2}>

          <Button
            bg={brandColor[200]}
            _groupHover={{ shadow: "xl" }}
            _active={{}}
            as={Link}
            href="/signup"
            color="white"
            _hover={{}}
            size={"md"}
            rounded={"lg"}
            mt={"5"}
            variant={"solid"}
            fontWeight={"medium"}
            >
            Get In &rarr;
          </Button>
            </AnimateOnVisible>
        </Box>

        <AnimateOnVisible>
          <Text fontSize={"3xl"} textAlign={"center"} mt="20">
            What we offer?
          </Text>
        </AnimateOnVisible>
        <Flex justify={"center"} flexDir={["column", 'row']} py="20" align={"center"}>
          <Box>
            <AnimateOnVisible>
              <Image
                css={{ filter: "grayscale(100%)" }}
                rounded="xl"
                src="/what-we-offer.webp"
                height={["300", "500"]}
                width="350"

              />
            </AnimateOnVisible>
          </Box>
          <Flex gap="10" mt={["5", ""]} flexDir={"column"} ml="10">
            <Box w="80%">
              <AnimateOnVisible>
                <Text fontSize={"xl"} pb="4">
                  Epic Contests
                </Text>
              </AnimateOnVisible>
              <AnimateOnVisible>
                <Text>
                  Compete with artists around the globe and excel your skills.
                </Text>
              </AnimateOnVisible>
            </Box>
            <Box w="80%">
              <AnimateOnVisible>
                <Text fontSize={"xl"} pb="4">
                  Exclusive Prizes
                </Text>
              </AnimateOnVisible>
              <AnimateOnVisible>
                <Text>
                  Win funds, equipment and expand your network in the industry.
                </Text>
              </AnimateOnVisible>
            </Box>
            <Box w="80%">
              <AnimateOnVisible>
                <Text fontSize={"xl"} pb="4">
                  Brand Assistance
                </Text>
              </AnimateOnVisible>
              <AnimateOnVisible>
                <Text>
                  Get top-notch help to build your unique musical brand.
                </Text>
              </AnimateOnVisible>
            </Box>
          </Flex>
        </Flex>
        <Flex bg="black" flexDir={"column"}>
          <Text textAlign={"center"} w={"full"} my="10" fontSize={"3xl"}>
            BRANDS WE'VE COLLABORATED WITH.
          </Text>
          <Flex ml={['5','']} alignItems={"center"} w='full' justify="center" gap="10">
            <Flex
              justify={"center"}
              alignItems={"center"}
              flexDir={"column"}
              gap="3"
            >
              <Image src="/icons/yamaha.png" width="30" height="30" />
              <Text>Yamaha</Text>
            </Flex>
            <Flex
              justify={"center"}
              alignItems={"center"}
              flexDir={"column"}
              gap="3"
            >
              <Image src="/icons/spotify.png" width="30" height="30" />
              <Text>Spotify</Text>
            </Flex>
            <Flex
              justify={"center"}
              alignItems={"center"}
              flexDir={"column"}
              gap="3"
            >
              <Image src="/icons/ableton.png" width="30" height="30" />
              <Text>Ableton</Text>
            </Flex>
            <Flex></Flex>
          </Flex>
          <Flex flexDir={["column", "row"]} justify={"center"} gap="10" mx="10" my="20">
            {[
              {
                image: "/person1.jpg",
                name: "Kevin Rodgers",
                description:
                  "Loyauxx took my music career to a whole new level!",
              },
              {
                image: "/person3.jpg",
                name: "Rose Sandoval",
                description:
                  "The rewards and mentoring I received are incredible.",
              },
              {
                image: "/person2.jpg",
                name: "Tod Mayer",
                description: "Participated and had the most amazing time ever!",
              },
            ].map(({ image, name, description }, index) => (
              <AnimateOnVisible position={index + 2}>
                <Flex flexDir={"column"} bg="whiteAlpha.200" rounded="xl" p="7">
                  <Avatar name={name} src={image} size="lg" />
                  <Text minH="40" mt="5" fontSize={"lg"}>
                    {description}
                  </Text>
                  <Text>{name}</Text>
                </Flex>
              </AnimateOnVisible>
            ))}
          </Flex>
          <Box px="10" py="32" bg="#0C0C0C">
            <AnimateOnVisible>
              <Text mb="16" textAlign={'center'} fontSize={"3xl"}>
                Frequently Asked Questions
              </Text>
            </AnimateOnVisible>
            <Flex flexDir={["column", "row"]} gap="10">
              {[
                {
                  ques: "How can I participate in the music competitions on Loyauxx?",
                  answer:
                    "Participating in Loyauxx music competitions is a breeze! Visit our website, browse the competitions, and click on the one you like. Read the guidelines, follow instructions, and submit your song within the timeframe. Meet the rules for eligibility. Best of luck!",
                },
                {
                  ques: "How can I connect with other music enthusiasts and artists on Loyauxx?",
                  answer:
                    "Join the vibrant Loyauxx community on our dedicated Discord channel! Connect, collaborate, and engage with music enthusiasts and artists. Share your work, seek feedback, and discover new talents. It's the perfect platform to network and build relationships in the music community. Join us today and be part of the excitement!",
                },
                {
                  ques: "How are the winners of the music competitions determined on Loyauxx?",
                  answer:
                    "Loyauxx's music competition winners are chosen by industry experts based on creativity, originality, technical skill, and impact. Our judging process is fair and unbiased, ensuring deserving artists receive recognition.",
                },
              ].map(({ ques, answer }) => (
                <AnimateOnVisible>
                  <Box flex="1">
                    <Text fontWeight={"semibold"} fontSize={"lg"} mb="4">
                      {ques}
                    </Text>
                    <Text opacity={0.7}>{answer}</Text>
                  </Box>
                </AnimateOnVisible>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
