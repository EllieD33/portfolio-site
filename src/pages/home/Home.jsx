import { Flex, VStack, StackDivider } from "@chakra-ui/react";
import Skills from "./sections/Skills";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";

const Home = () => {
    return (
        <Flex as="main" flexDirection="column" maxW={1350} alignSelf="center" mx="auto">
            <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4}>
                <Profile />
                <Skills />
                <Projects />
            </VStack>
        </Flex>
    )
}

export default Home;