import { Image, Link } from "@chakra-ui/next-js";
import { Box, Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex py='10' flexDir={'column'} justify={'center'} alignItems={'center'} w='full' bg='black' color='white'>
            <Image alt='Loyauxx Logo' src="/logo-transparent.png" width="300" height='20' objectFit="contain" my='5' />
            <Flex gap='5'>
                <Text as={Link} href='/contests'>Contests</Text>
                <Text as={Link} href='/about'>About Loyauxx</Text>
                <Text as={Link} href='/contact-us'>Contact Us</Text>
            </Flex>
            <Text opacity={0.7} fontSize={'sm'} mt='3'>© 2023 SKIO Music. All rights reserved.</Text>
        </Flex>
    )
}

export default Footer;