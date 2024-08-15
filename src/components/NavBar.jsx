import { useState } from "react";
import { Flex, Box, Text, IconButton, Collapse, VStack, StackDivider, useColorMode } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavItem = ({ to, colorMode, onClick, children }) => (
    <ScrollLink to={to} smooth={true} duration={500} spy={true} offset={-50} onClick={onClick}>
        <Box
            as="a" 
            role="link"
            tabIndex={0}
            m={1}
            cursor="pointer"
            borderBottom="2px solid transparent"
            _hover={{ borderBottomColor: "purple.600" }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault(); 
                    e.currentTarget.click(); 
                }
            }}
        >
            <Text fontSize="xl" color={colorMode === 'dark' ? 'white' : 'black'} >{children}</Text>
        </Box>
    </ScrollLink>
);

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { colorMode } = useColorMode();

    const handleNavItemClick = () => {
        setIsOpen(false);
    };

    return (
        <Flex position="relative" maxW="1200px" mx="auto" justifyContent="space-between" alignItems="center">
            <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Toggle Navigation"
                    onClick={() => setIsOpen(!isOpen)}
                    display={{ md: "none" }} 
                />
            <Flex gap={5} display={{ base: "none", md: "flex" }} alignItems="center" >
                <NavItem to="About" colorMode={colorMode} >About</NavItem>
                <Text fontSize="xl">|</Text>
                <NavItem to="Skills" colorMode={colorMode} >Skills</NavItem>
                <Text fontSize="xl">|</Text>
                <NavItem to="Projects" colorMode={colorMode} >Projects</NavItem>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <VStack
                    py={2}
                    spacing={2}
                    align="center"
                    bg="white"
                    width={150}
                    position="absolute"
                    top="100%"
                    right="0"
                    zIndex="popover"
                    divider={<StackDivider borderColor='gray.200' />}
                    boxShadow="0 1px 3px rgba(0, 0, 0, 0.5)"
                >
                    <NavItem to="About" onClick={handleNavItemClick}>About</NavItem>
                    <NavItem to="Skills" onClick={handleNavItemClick}>Skills</NavItem>
                    <NavItem to="Projects" onClick={handleNavItemClick}>Projects</NavItem>
                </VStack>
            </Collapse>
        </Flex>
    );
};

export default NavBar;
