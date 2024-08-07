import { Flex, Box, Text } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const NavItem = ({ to, children }) => (
    <ScrollLink to={to} smooth={true} duration={500} spy={true} offset={-50}>
        <Box
            mx={2}
            cursor="pointer"
            borderBottom="2px solid transparent"
            _hover={{ borderBottomColor: "purple.600" }}
        >
            <Text fontSize="xl">{children}</Text>
        </Box>
    </ScrollLink>
);

const Navbar = () => {
    return (
        <Flex maxW="1200px" mx="auto" justifyContent="space-between" alignItems="center">
            <Flex gap={5}>
                <NavItem to="About">About</NavItem>
                <Text fontSize="xl">|</Text>
                <NavItem to="Skills">Skills</NavItem>
                <Text fontSize="xl">|</Text>
                <NavItem to="Projects">Projects</NavItem>
            </Flex>
        </Flex>
    );
};

export default Navbar;
