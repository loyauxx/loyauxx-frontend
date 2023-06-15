import ContestRules from "@/components/Contest/ContestRules";
import OtherEntries from "@/components/Contest/OtherEntries";
import SubmitContestEntry from "@/components/Contest/SubmitContestEntry";
import { Image } from "@chakra-ui/next-js";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  ListItem,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Box bg={"#131119"} pb="10" color="white" minH="90vh">
      <Flex
        justify={"space-between"}
        alignItems={"start"}
        // bgImage="/img/photo-1518972559570-7cc1309f3229.jpg"
        bgImage="/BAM.webp"
        h="max"
        w="full"
        minH="60vh"
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        bgSize={"cover"}
      >
        <Flex flexDir={"column"} mt="5" h={"full"} py="10" w="55%" pl={"20"}>
          <Text fontSize="4xl">Best Artist of the Month</Text>
          <Text mt="5" opacity={0.7}>
            Enter the exhilarating Best Artist of the Month (B.A.M) competition!
            Submit your songs, regardless of genre, and witness the judgment
            unfold as our expert panel ranks each entry. It's your chance to
            showcase your talent and claim the coveted title of Best Artist of
            the Month. Participate in the competition today!
          </Text>
          <Button mt="7" w="max" colorScheme="blue" fontWeight={"normal"}>
            Participate Now
          </Button>
        </Flex>
        <Flex
          alignItems={"center"}
          flexDir={"column"}
          h="full"
          pos="relative"
          pr="20"
        >
          <Image
            src="/icons/open-sign.png"
            width="400"
            height={"400"}
            alt=""
            w="32"
            h="auto"
          />
          <Text fontSize="5xl" fontWeight={"bold"}>
            10
          </Text>
          <Text fontSize="lg" fontWeight={"light"}>
            Days remaining
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems={"center"} ml="20" my="5">
        <Image
          src="/logo-transparent.png"
          width={"62"}
          height={"62"}
          rounded="full"
          objectFit="contain"
          alt=""
          border="1px"
          borderColor={"whiteAlpha.400"}
          bg="black"
        />
        <Box ml="4">
          <Text opacity={0.7} fontSize={"sm"}>
            Hosted By
          </Text>
          <Text fontSize="lg">Loyauxx</Text>
        </Box>
      </Flex>
      <Flex justify={"space-between"} px="20" gap="10">
        <Tabs
          rounded="lg"
          overflow={"clip"}
          borderColor={"whiteAlpha.300"}
          colorScheme="white"
          variant={"unstyled"}
          w="full"
          flex="2"
        >
          <TabList
            bg="#1D1C24"
            display={"flex"}
            _activeLink={{ borderColor: "blue" }}
            _activeStep={{ borderColor: "blue", bg: "blue" }}
            justifyContent={""}
          >
            {[
              { text: "Details" },
              { text: "Prizes" },
              { text: "Rules" },
              { text: "Entries" },
            ].map(({ text }) => (
              <Tab
                py="4"
                fontWeight={"normal"}
                px="12"
                w="max"
                _hover={{}}
                _active={{}}
              >
                {text}
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels minH="70vh">
            <TabPanel>
              <Box>
                <Text>
                  Welcome to the exhilarating world of Loyauxx's Best Artists of
                  the Month (B.A.M) contest! Each month, we invite talented
                  artists from all genres to submit their songs for a chance to
                  showcase their skills and win fantastic prizes. Whether you're
                  into pop, rock, hip-hop, or any other genre, B.A.M welcomes
                  all.
                  <br />
                  <br />
                  Our expert panel of judges, comprising seasoned music industry
                  professionals, carefully listens to and evaluates each entry.
                  They analyze the creativity, composition, and overall impact
                  of every song, resulting in a ranking that highlights the best
                  of the best.
                  <br />
                  <br />
                  The winners of the B.A.M contest are not only rewarded with
                  recognition and a sense of accomplishment but also receive
                  exciting prizes based on their position. From cash rewards and
                  studio equipment to promotional opportunities and exclusive
                  partnerships, we ensure that our winners are well-appreciated
                  for their exceptional talent.
                  <br />
                  <br />
                  But B.A.M is not just about competition. It's a platform that
                  fosters artistic growth, offers valuable feedback from
                  experts, and connects artists with like-minded individuals.
                  It's a chance to showcase your music to a wider audience and
                  gain exposure within the vibrant Loyauxx community.
                  <br />
                  <br />
                  So, gather your creativity, passion, and musical prowess, and
                  submit your masterpiece to the B.A.M contest. Join us on this
                  thrilling journey of discovery, celebration, and the pursuit
                  of musical excellence. Together, let's make every month a
                  celebration of the Best Artists of the Month!
                </Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Text>
                  Get ready for some amazing prizes at the Best Artists of the
                  Month (B.A.M) contest hosted by Loyauxx! We believe in
                  rewarding talent, and our top winners receive not only
                  fantastic prizes but also special recognition.
                  <br />
                  <br />
                  For the first-place winner, we have a grand package that
                  includes a social media shoutout to your profile, gaining you
                  exposure to a wider audience and potential fans. Additionally,
                  you'll earn a whopping 20 points to boost your standing in the
                  competition.
                  <br />
                  <br />
                  The second-place winner doesn't miss out either! With a strong
                  performance, you'll receive 10 points and a well-deserved
                  social media shoutout to showcase your talent.
                  <br />
                  <br />
                  Third-place winners will be awarded 5 points and receive
                  recognition through a dedicated social media shoutout.
                  <br />
                  <br />
                  But that's not all! We appreciate the dedication and effort of
                  all our participants. Even if you secure a position within the
                  top 10, you'll earn 2 points and gain exposure through our
                  Loyauxx Artist Spotlight.
                  <br />
                  <br />
                  B.A.M isn't just about the prizes; it's an opportunity to
                  showcase your skills, gain recognition, and connect with a
                  vibrant community of music enthusiasts. Don't miss out on this
                  chance to elevate your music career and make your mark in the
                  industry.
                  <br />
                  <br />
                  Submit your song to B.A.M today and let your talent shine. Get
                  ready for an exciting journey, incredible prizes, and a chance
                  to be in the spotlight as part of the prestigious Loyauxx
                  community!
                </Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <ContestRules />
            </TabPanel>
            <TabPanel>
              <SubmitContestEntry />
              
              <OtherEntries />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box flex="1">
          <SubmissionDeadline />
          <ContestTimeline />
        </Box>
      </Flex>
    </Box>
  );
};

const ContestTimeline = () => {
  return (
    <Flex
      rounded="md"
      flexDir={"column"}
      mt="5"
      border="1px"
      borderColor="whiteAlpha.300"
    >
      <Flex
        flexDir={"column"}
        borderLeft="4px"
        color="blue.600"
        px="10"
        borderColor={"blue.600"}
        py="5"
      >
        <Text>Submission</Text>
        <Text>12 Jun - 12 Jul</Text>
      </Flex>
      <Divider />
      <Flex flexDir={"column"} px="10" py="5">
        <Text>Judging</Text>
        <Text>12 Jul - 22 Jul</Text>
      </Flex>
      <Divider />

      <Flex flexDir={"column"} px="10" py="5">
        <Text>Winners Declaration</Text>
        <Text>23 Jul</Text>
      </Flex>
    </Flex>
  );
};

const SubmissionDeadline = () => {
  return (
    <Box p="5" border="1px" borderColor="whiteAlpha.300">
      <Flex gap="5" textAlign={"center"} justify={"center"} w="full">
        <Box>
          <Text fontSize={"xl"}>10</Text>
          <Text fontSize={"xs"} opacity={0.7}>
            Days
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>3</Text>
          <Text fontSize={"xs"} opacity={0.7}>
            Hours
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>24</Text>
          <Text fontSize={"xs"} opacity={0.7}>
            Minutes
          </Text>
        </Box>
        <Box>
          <Text fontSize={"xl"}>10</Text>
          <Text fontSize={"xs"} opacity={0.7}>
            Seconds
          </Text>
        </Box>
      </Flex>
      <Flex flexDir={"column"} justify={"center"} mx="10">
        <Text
          w="full"
          textAlign={"center"}
          fontSize={"2xl"}
          mt="5"
          pb="2"
          borderBottom={"8px"}
          borderColor="blue.600"
        >
          Submission Deadline
        </Text>
        <Flex justify="center" w="full">
          <Button
            w="max"
            mt="5"
            justifySelf={"center"}
            rounded="3xl"
            colorScheme="blue"
            fontWeight={"normal"}
          >
            Enter Contest
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};


export default Page;
