import { Flex, Image, Link, LinkBox, LinkOverlay, Text, useColorMode } from "@chakra-ui/react"

const Footer = () => {
    const socialLinks = [
        {
            href: "https://github.com/EllieD33",
            src: "https://img.icons8.com/glyph-neue/64/000000/github.png",
            darkSrc: "https://img.icons8.com/glyph-neue/64/ffffff/github.png",
            alt: "GitHub",
            ariaLabel: "GitHub Profile"
        },
        {
            href: "https://www.linkedin.com/in/ellen-daly-swe/",
            src: "https://img.icons8.com/fluency/48/linkedin.png",
            alt: "LinkedIn",
            ariaLabel: "LinkedIn Profile"
        }
    ];

    const { colorMode } = useColorMode();

    return (
        <Flex as="footer" flexDirection="column" alignItems="center" boxShadow="0 1px 3px rgba(0, 0, 0, 0.5)" >
            <Flex mt={2} gap={4} >
                {socialLinks.map(({ href, src, darkSrc, alt, ariaLabel }) => (
                    <LinkBox key={href}>
                        <LinkOverlay href={href} isExternal aria-label={ariaLabel}>
                            <Image src={darkSrc && colorMode === 'dark' ? darkSrc : src} alt={alt} boxSize="48px" objectFit="cover" />
                        </LinkOverlay>
                    </LinkBox>
                ))}
            </Flex>
            <Text mt={2} >Icons by
                <Link href="https://icons8.com/" isExternal > Icons8</Link>
            </Text>
        </Flex>
    )
}

export default Footer;