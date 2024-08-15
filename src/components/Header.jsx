import { useColorMode, IconButton, Flex, Heading } from "@chakra-ui/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import NavBar from "./NavBar";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            mb={5}
            pb={5}
            as="header"
            flexDirection="column"
            alignSelf="center"
            mx="auto"
            boxShadow="0 1px 3px rgba(0, 0, 0, 0.5)"
            position="sticky"
            top="0" 
            width="100%" 
            zIndex="sticky"
            bg={colorMode === 'dark' ? "gray.700" : 'white'} 
        >
            <Flex mt={5} mx={5} justify="space-between" alignItems="center">
                <Heading as="h1">Ellen Daly</Heading>
                <Flex alignItems="center" gap={5}>
                    <NavBar />
                    <IconButton
                        ml={2}
                        onClick={toggleColorMode}
                        aria-label="Toggle light/dark mode"
                        icon={
                            colorMode === "light" ? (
                                <FaRegMoon />
                            ) : (
                                <MdOutlineWbSunny />
                            )
                        }
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Header;
