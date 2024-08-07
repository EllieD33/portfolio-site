import { Flex } from "@chakra-ui/react";
import Skills from "./sections/Skills";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";

const Home = () => {
    return (
        <Flex as="main" flexDirection="column" maxW={1350} alignSelf="center" mx="auto">
            <Profile />
            <Skills />
            <Projects />
        </Flex>
    )
}

export default Home;