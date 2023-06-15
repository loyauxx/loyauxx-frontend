import { Image } from "@chakra-ui/next-js";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";

const OtherEntries = () => {
  return (
    <>
      {true ? (
        <Box mt="20">
          <Text my="5" fontSize={"xl"} opacity={0.7}>
            Other Entries
          </Text>
          <Divider />
          <Flex
            mt="5"
            fontWeight={"semibold"}
            borderBottom={"1px"}
            borderColor={"whiteAlpha.400"}
            pb="5"
            alignItems={"center"}
            w="full"
            gap="4"
          >
            <Text flex="4" justifyItems={"center"} textAlign={"center"}>
              Song Title
            </Text>
            <Text flex="2" ml="4">
              Genre
            </Text>
            <Text flex="2">Key</Text>
            <Text flex="2">BPM</Text>
            <Box flex="2" />
          </Flex>
          <SingleEntryBlock />
        </Box>
      ) : (
        <Text textAlign={"center"} fontSize={"2xl"} opacity={0.7} mt="36">
          No Entries
        </Text>
      )}
    </>
  );
};

const SingleEntryBlock = () => {
  return (
    <Flex py="5" borderBottom="1px" borderColor={"whiteAlpha.400"}>
      <Flex alignItems={"center"} w="full" gap="4">
        <Box flex="1" height="16" width="16">
          <Image
            alt=""
            src={"/img/istockphoto-1309235677-612x612.jpg"}
            height="16"
            width="200"
            objectFit="cover"
          />
        </Box>
        <Box flex="3">
          <Text>Song Name</Text>
          <Text opacity={"0.7"} fontSize={"sm"}>
            Artist Name
          </Text>
        </Box>
        <Box flex="2">
          <Text
            p="3"
            w="max"
            rounded="md"
            border="1px"
            borderColor="lightblue"
            color="lightblue"
          >
            EDM
          </Text>
        </Box>
        <Text flex="2">G min</Text>
        <Text flex="2">120</Text>
        <Flex gap="4" alignItems={"center"} flex="2">
          <Image
            alt="soundcloud"
            src="/icons/soundcloud.png"
            width="7"
            height="7"
            objectFit="cover"
          />
          <Image
            alt="soundcloud"
            src="/icons/soundcloud.png"
            width="7"
            height="7"
            objectFit="cover"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OtherEntries;
