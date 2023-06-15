import { Image } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const SubmitContestEntry = () => {
  const [submitMode, setSubmitMode] = useState(false);
  return (
    <>
      {submitMode ? (
        <Box>
          <Text mb="4" fontSize={"lg"}>
            Upload File
          </Text>
          <Flex
            pos={"relative"}
            w="full"
            height="20"
            border="2px dotted"
            _hover={{ bg: "rgba(37, 150, 190, 0.03)", cursor: "pointer" }}
            borderColor={"blue.400"}
            rounded="lg"
          >
            <Box w="full" left="22%" top="35%" pos="absolute">
              <Text>
                + Click or drag .wav, .mp3 or .m4a file to upload master
              </Text>
            </Box>
            <Input
              _hover={{ cursor: "pointer" }}
              accept="audio/*"
              zIndex={99999}
              opacity={0}
              type="file"
              h="full"
            />
          </Flex>
          <Divider mt="10" mb="5" />
          <Text fontSize={"lg"}>Audio Metadata</Text>
          <Flex mt="5" gap='10' justify="space-between">
            <Flex
            flex='1'
              pos={"relative"}
              w="32"
              height="44"
              border="2px dotted"
              bg="blackAlpha.600"
              _hover={{ bg: "black", cursor: "pointer" }}
              borderColor={"blue.400"}
              rounded="lg"
            >
              <Box
                bgImage="/icons/music-note.png"
                _hover={{ cursor: "pointer" }}
                w="full"
                top="40%"
                pos="absolute"
              >
                <Text opacity={0.7} textAlign={"center"}>
                  Upload Artwork
                </Text>
              </Box>
              <Input
                _hover={{ cursor: "pointer" }}
                accept="image/*"
                zIndex={99999}
                opacity={0}
                type="file"
                h="full"
              />
            </Flex>
              <Flex as="form" flex='3' gap="5" flexDir={"column"}>
                <Flex gap="5" w='full'>
                  <Box w='full'>
                    <Text>Song Title</Text>
                    <Input placeholder="Flowers" border="1px" borderColor='whiteAlpha.600' mt='1' type="text" />
                  </Box>
                  <Box w='full'>
                    <Text>Artist</Text>
                    <Input type="text" borderColor='whiteAlpha.600' mt='1' />
                  </Box>
                </Flex>
                <Box>
                  <Text>Genre</Text>
                  <Select borderColor='whiteAlpha.600' mt='1'>
                    <option>EDM</option>
                  </Select>
                </Box>
                <Flex gap='5' >
                  <Box flex='2'>
                    <Text>Song Description</Text>
                    <Textarea height={"36"} placeholder="Describe Your Song" borderColor='whiteAlpha.600' mt='1' />
                  </Box>
                  <Flex flex='1' flexDir={"column"}>
                    <Box mt='3'>
                      <Text>Key</Text>
                      <Select  borderColor='whiteAlpha.600' mt='1'>
                        <Box color='black' bg="black" as="option">C Min</Box>
                        <Box color='black' bg="black" as="option">D Min</Box>
                      </Select>
                    </Box>
                    <Box mt='5'>
                      <Text>BPM</Text>
                      <Input placeholder="120" max="999" min="60" borderColor='whiteAlpha.600' mt='1' type='number' />
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
          </Flex>
        </Box>
      ) : (
        <Box>
          <Text fontSize={"xl"} opacity={0.7}>
            My Entry
          </Text>
          <Text mt="10" opacity="0.7">
            You currently don't have any entry in this contest.
          </Text>
          <Button
            w="max"
            mt="5"
            justifySelf={"center"}
            rounded="3xl"
            onClick={() => setSubmitMode(true)}
            colorScheme="blue"
            fontWeight={"normal"}
          >
            Submit Entry
          </Button>
        </Box>
      )}
    </>
  );
};

export default SubmitContestEntry;
