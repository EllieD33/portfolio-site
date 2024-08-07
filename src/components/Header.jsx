import { useColorMode, IconButton, Flex, Heading } from '@chakra-ui/react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import NavBar from './NavBar';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex mb={5} pb={5} as="header" flexDirection="column" maxW={1350} alignSelf="center" mx="auto" boxShadow="0 1px 3px rgba(0, 0, 0, 0.5)" >
            <Flex mt={5} mx={5} justify="space-between" >
                <Heading as="h1">Ellen Daly</Heading>
                <NavBar />
                <IconButton
                            ml={2}
                            onClick={toggleColorMode}
                            aria-label="Toggle light/dark mode"
                            icon={colorMode === 'light' ? <FaRegMoon /> : <MdOutlineWbSunny />}
                        />
            </Flex>
        </Flex>
    )
}

export default Header;