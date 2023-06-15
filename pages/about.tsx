import { Image } from "@chakra-ui/next-js";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Box minH="90vh">
      <Box pos="relative" bg="black">
        <Image
          src="/img/HD-wallpaper-music-studio-ultra-music-laptop-tech-sound-studio.jpg"
          objectFit="cover"
          alt=""
          width="10000"
          height="2000"
          opacity={0.5}
          w="100%"
          h="72"
        />
        <Flex
          w="full"
          flexDir={"column"}
          justify="center"
          alignItems={"center"}
          pos="absolute"
          top="20%"
        >
          <Text fontSize={"4xl"} color="white">
            About Loyauxx
          </Text>
          <Text w="60%" pt="5" color="white" textAlign={"center"}>
            Loyauxx is the ultimate destination for music enthusiasts and
            aspiring artists alike. With a passion for promoting talent and
            fostering creativity, Loyauxx provides a platform for music
            competitions, discovery, and community engagement. Join us to embark
            on a journey where music meets inspiration, collaboration, and
            endless possibilities.
          </Text>
        </Flex>
      </Box>
      <Flex gap="10" mx="32" my="20" flexDir={"column"} alignItems={"center"}>
        {/* <Image alt='' src="/logo-transparent.png" height={"100"} width='200' /> */}
        <Flex align={"center"} gap="14">
          <Box flex="1">
            <Heading as="h2" size="lg" mb={4}>
              What is Loyauxx?
            </Heading>
            <Text>
              Loyauxx is an exciting platform that brings together music
              enthusiasts, aspiring artists, and fans in a vibrant community. It
              offers a range of opportunities for musicians to showcase their
              talents, engage in friendly competitions, and connect with fellow
              artists from various genres.
            </Text>
            <Text mt={4}>
              Our mission is to provide a space where creativity thrives, music
              is celebrated, and connections are made. Loyauxx hosts thrilling
              music competitions where artists can submit their work, receive
              recognition, and win exciting prizes. These competitions cover a
              diverse range of genres, ensuring there's something for everyone.
            </Text>
            <Text mt={4}>
              With a strong focus on community, Loyauxx allows artists and music
              lovers to discover new talents, collaborate on projects, and
              inspire each other.
            </Text>
            <Text mt={4}>
              Join Loyauxx today and embark on a musical adventure where passion
              meets opportunity, creativity flourishes, and the love for music
              unites us all.
            </Text>
          </Box>
          <Image
            rounded="lg"
            flex="1"
            src="/img/about-us.jpg"
            alt=""
            height="450"
            objectFit="cover"
            width={"400"}
          />
        </Flex>
        <Text my="10" textAlign={'left'} w='full' mt='5' fontSize={"3xl"} fontWeight={"bold"}>
          FREQUENTLY ASKED QUESTIONS
        </Text>
        <Flex justify="space-between" gap="10">
          <Accordion flex="1" allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    How can I participate in the music competitions on Loyauxx?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Participating in music competitions on Loyauxx is easy! Simply
                visit our website and navigate to the competitions section.
                There, you will find a list of ongoing and upcoming
                competitions. Click on the competition you're interested in and
                read the guidelines carefully. Follow the instructions to submit
                your song within the specified timeframe. Make sure to meet the
                requirements outlined in the rules section to ensure your entry
                is eligible. Good luck!
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Are there any age restrictions for participating in the
                    music competitions?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                At Loyauxx, we believe in providing equal opportunities for
                artists of all ages. Therefore, there are no specific age
                restrictions for participating in our music competitions.
                Whether you're a young aspiring artist or an experienced
                musician, you are welcome to showcase your talent and compete
                for recognition. We celebrate the diversity and creativity of
                artists from all age groups.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Can I submit a song in any language for the competitions?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, you can submit a song in any language for the competitions
                on Loyauxx. We celebrate the diversity of music and embrace
                different languages and cultures. Whether your song is in
                English, Spanish, French, or any other language, we encourage
                you to share your unique voice and artistic expression through
                your music.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    How can I connect with other music enthusiasts and artists
                    on Loyauxx?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Loyauxx has a thriving community of music enthusiasts and
                artists eager to connect and collaborate. We have a dedicated
                Discord channel where you can join discussions, share your work,
                and engage with like-minded individuals. It's an excellent
                platform to network, seek feedback, discover new talents, and
                build relationships within the music community. Join us on
                Discord and be a part of the vibrant Loyauxx community.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple flex="1">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Can I collaborate with other artists on Loyauxx?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Absolutely! Collaboration is encouraged and celebrated on
                Loyauxx. We understand the power of collective creativity and
                the magic that happens when artists come together. If you have a
                fellow musician or producer you'd like to collaborate with, feel
                free to team up and create something amazing. Collaborations can
                bring a fresh perspective and unique blend of talents to your
                music.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    How are the winners of the music competitions determined on
                    Loyauxx?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The winners of the music competitions on Loyauxx are selected
                through a thorough judging process. Our expert panel of judges,
                including industry professionals and music experts, carefully
                evaluate each entry based on various criteria such as
                creativity, originality, technical skill, and overall impact.
                The judging process is fair and unbiased, ensuring that
                deserving artists receive recognition for their exceptional
                work.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Are there any specific guidelines for submitting songs to
                    Loyauxx competitions?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Each competition on Loyauxx has its own set of guidelines
                outlined in the rules section. These guidelines provide details
                on submission requirements, such as file formats, song duration
                limits, and any specific themes or genres for the competition.
                It's essential to carefully read and follow the guidelines to
                ensure your submission meets the criteria and is eligible for
                consideration. Adhering to the guidelines will maximize your
                chances of success in the competitions.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Page;
