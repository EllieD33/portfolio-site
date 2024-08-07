import { Flex, Image, Link, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex as="footer" flexDirection="column" alignItems="center" boxShadow="0 1px 3px rgba(0, 0, 0, 0.5)" >
            <Flex mt={2} >
                <LinkBox>
                    <LinkOverlay href="https://github.com/EllieD33" isExternal aria-label="GitHub Profile">
                        <Image
                            src="https://img.icons8.com/fluency-systems-filled/48/github.png"
                            alt="GitHub"
                            boxSize="48px"
                            objectFit="cover"                            
                        />
                    </LinkOverlay>
                </LinkBox>
                <LinkBox>
                    <LinkOverlay href="https://www.linkedin.com/in/ellen-daly-swe/" isExternal aria-label="GitHub Profile">
                        <Image
                            src="https://img.icons8.com/fluency/48/linkedin.png"
                            alt="LinkedIn"
                            boxSize="48px"
                            objectFit="cover"
                        />
                    </LinkOverlay>
                </LinkBox>
            </Flex>
            <Text mt={2} >Icons by
                <Link href="https://icons8.com/" isExternal > Icons8</Link>
            </Text>
        </Flex>
    )
}

export default Footer;