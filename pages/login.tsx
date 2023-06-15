import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";

const Page = () => {
  return <Flex justify='center' alignItems={'center'} bg='#131119' color='white' w='full' minH='90vh'>
    <Flex h={'max'} w='max' shadow={"md"} p='5' rounded='xl' bg='black' flexDir={'column'}>
        <Text fontWeight={'bold'} fontSize={"xl"}>Login</Text>
        <Text>Explore a world of music and uncover new sounds at Loyauxx.</Text>
        <Input mt='5' placeholder="Enter Email or Username" height={"12"} w='full' />
        <Input mt='5' placeholder="Password" height={"12"} w='full'/>
        <Button w='full' mt='5' p='5' rounded='2xl' bg='#AB9307' color='white'>Login</Button>
        <Divider mt='5' />
    </Flex>
  </Flex>;
};

export default Page;