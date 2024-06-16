import { useColorMode, IconButton, Flex, Heading } from '@chakra-ui/react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <Flex m={4} as="header" justify="space-between" >
        <Heading as="h1">Ellen Daly</Heading>
        <IconButton
                    ml={2}
                    onClick={toggleColorMode}
                    aria-label="Toggle light/dark mode"
                    icon={colorMode === 'light' ? <FaRegMoon /> : <MdOutlineWbSunny />}
                />
    </Flex>
}

export default Header;