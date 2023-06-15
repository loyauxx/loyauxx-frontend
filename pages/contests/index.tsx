import { brandColor, darkColor } from "@/constants/design";
import { Link } from "@chakra-ui/next-js";
import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box minH="100vh" color="white" bg={"#131119"}>
      <Flex alignItems={"center"} gap="5" px="10" pt="10">
        <Competition />
      </Flex>
      <Flex>
        <Box flex="2">
          <Charts />
        </Box>
        <Box flex="1">
          <ArtistSpotlight />
        </Box>
      </Flex>
    </Box>
  );
};

const Charts = () => {
  return (
    <Box px="20" my="10" pos="relative" overflow={"clip"}>
      <Text fontSize="2xl">Leaderboard</Text>
      <Flex
        flexDir={"column"}
        // justify='center'
        // alignItems={'center'}
        w="full"
        mt="10"
        border="1px"
        fontSize="2xl"
        pos={"relative"}
        h="max"
        borderColor="whiteAlpha.600"
      >
        <Flex
          justify={"center"}
          alignItems={"center"}
          w="100%"
          h="100%"
          css={{ backdropFilter: "blur(5px)" }}
          bg="blackAlpha.50"
          zIndex={9999}
          pos={"absolute"}
        >
          <Text fontSize="3xl">Coming soon...</Text>
        </Flex>
        <Text pl='4' pt='4'>Top Artists</Text>
        <Flex pt="10" justify="space-around" w="full" alignItems={"center"}>
          <Flex
            justify="center"
            border="1px"
            borderTop="8px"
            pos="relative"
            borderColor="#9E9E9E"
            height="20vh"
            width="30vh"
            bgImage="https://t3.ftcdn.net/jpg/01/10/11/00/360_F_110110063_4kxHX5YKcqrKqFz9udsaqmjkTCoOhKHc.jpg"
            backgroundSize={"contain"}
          >
            <Image
              h="20"
              w="20"
              pos="absolute"
              bottom="-10"
              src="https://img.icons8.com/officel/80/olympic-medal-silver.png"
            />
          </Flex>
          <Flex
            justify="center"
            mb="20"
            border="1px"
            pos="relative"
            borderTop="8px"
            borderColor="#E1C994"
            height="20vh"
            width="30vh"
            bgImage="https://t3.ftcdn.net/jpg/01/10/11/00/360_F_110110063_4kxHX5YKcqrKqFz9udsaqmjkTCoOhKHc.jpg"
            backgroundSize={"contain"}
          >
            <Image
              h="20"
              w="20"
              pos="absolute"
              bottom="-10"
              src="https://img.icons8.com/officel/80/gold-medal.png"
            />
          </Flex>
          <Flex
            justify="center"
            pos="relative"
            border="1px"
            borderTop="8px"
            borderColor="#814C03"
            bgImage="https://t3.ftcdn.net/jpg/01/10/11/00/360_F_110110063_4kxHX5YKcqrKqFz9udsaqmjkTCoOhKHc.jpg"
            backgroundSize={"contain"}
            height="20vh"
            width="30vh"
          >
            <Image
              h="20"
              w="20"
              pos="absolute"
              bottom="-10"
              src="https://img.icons8.com/officel/80/olympic-medal-bronze.png"
            />
          </Flex>
        </Flex>
        <Flex flexDir={"column"} pt="10">
          <Flex
            fontSize={"lg"}
            flex="1 1 5 2"
            py="2"
            px="2"
            justify={"space-between"}
            borderColor={'whiteAlpha.600'}

            alignItems={"center"}
          >
            <Flex gap="5">
              <Text w="max">Rank</Text>

              {/* <Avatar name="Logic" rounded={'full'} size='sm' /> */}
              <Text ml="8">Name</Text>
            </Flex>
            <Text mr="5">Points</Text>
          </Flex>
          {Array.from({ length: 7 }).map((i, j) => (
            <Flex
              fontSize={"lg"}
              flex="1 1 5 2"
              py="3"
              px="2"
              justify={"space-between"}
              alignItems={"center"}
              borderTop="1px"
              borderColor={'whiteAlpha.600'}
            >
              <Flex gap="5">
                <Text w="8vh" pl="4">
                  {j + 4}
                </Text>

                <Avatar name="Logic" rounded={"full"} size="sm" />
                <Text>Logic</Text>
              </Flex>
              <Text pr="6vh">{j}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

const ArtistSpotlight = () => (
  <Box mt="10">
    <Text fontSize="lg">Artist Spotlight</Text>
    <Flex w="70%" my="5" gap="5" justify={"space-between"}>
      <Flex>
        <Avatar name="Logic" />
        <Box ml="4">
          <Text fontWeight={"normal"}>Logic</Text>
          <Flex alignItems="center" gap="2">
            <Image src="/icons/soundcloud.png" color={"white"} h="5" w="5" />
            <Text fontSize="xs" opacity={"0.7"}>
              521
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Button
        border="1px"
        _hover={{ bg: "whiteAlpha.400" }}
        rounded={"full"}
        px="5"
        borderColor="white"
        variant={"outline"}
        color="white"
        fontWeight={"normal"}
        py="2"
        fontSize="sm"
      >
        Visit
      </Button>
    </Flex>
    <Flex
      color="whiteAlpha.900"
      textAlign={"center"}
      flexDir={"column"}
      borderTop="2px"
      borderColor="whiteAlpha.200"
      w="70%"
      fontSize="sm"
      justify={"center"}
      pt="5"
      mt="5"
    >
      <Flex
      
      mt="3" w="full" >
        <Text textAlign={"center"} w="full">
          About us
        </Text>
        <Text textAlign={"center"} w="full">
          B.A.M
        </Text>
        <Text textAlign={"center"} w="full">
          Leaderboard
        </Text>
      </Flex>
      <Flex justify={"center"} gap='3' mt="4">
        <Image
          src={"https://img.icons8.com/color/48/youtube-play.png"}
          h="6"
          w="6"
        />
        <Image 
          h="6"
          w="6"
        src={"https://img.icons8.com/color/48/spotify--v1.png"} />
        <Image 
          h="6"
          w="6"
        src={"https://img.icons8.com/fluency/48/instagram-new.png"}
        />
      </Flex>
    </Flex>
  </Box>
);

const Competition = () => {
  return (
    <Link href="/contests/best-artist-of-the-month">
      <Box
        border="2px"
        borderColor="whiteAlpha.600"
        pos="relative"
        w="75vh"
        h="40vh"
        overflow={"clip"}
        objectFit={"contain"}
        cursor="pointer"
        role="group"
      >
        <Image
          src="/BAM.webp"
          h="inherit"
          _groupHover={{ opacity: "0.4", transform: "scale(1.1)" }}
          transition="all"
          transitionDuration={"0.3s"}
          opacity={"0.7"}
          w="inherit"
        />
        <Box w="full" pos="absolute" top="25%">
          <Text textAlign={"center"} shadow="md" fontSize="6xl">
            B.A.M
          </Text>
          <Text
            textAlign={"center"}
            shadow="md"
            fontSize="xl"
            fontWeight={"medium"}
          >
            Best Artist of the Month
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Page;
