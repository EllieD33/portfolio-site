import Skills from "./sections/Skills";
import Profile from "./sections/Profile";
import { Heading } from "@chakra-ui/react";

const Home = () => {
    return (
        <main>
            <Heading as="h2">Ellen Daly</Heading>
            <Profile />
            <Skills />
        </main>
    )
}

export default Home;