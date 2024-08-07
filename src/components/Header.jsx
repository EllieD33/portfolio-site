import { useColorMode, IconButton, Flex, Heading } from '@chakra-ui/react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex as="header" flexDirection="column" maxW={1350} alignSelf="center" mx="auto">
            <Flex m={5} justify="space-between" >
                <Heading as="h1">Ellen Daly</Heading>
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