import { Text, Flex } from "@chakra-ui/react";
import Section from "../../../components/Section";

const Profile = () => {
    const section = {
        title: "About Me",
    }
    return (
        <Section {...section} >
            <Flex flexDirection="column" maxW="80%" >
                <Text>I am a junior full stack developer. Harnessing my background in UX research, I am switching to a career in software engineering.  My knack for understanding user needs and accessibility principles will propel my journey into this new career. Embracing the ever-evolving nature of technology, I am driven by the perpetual need to learn and push the boundaries of my knowledge - this is when I truly thrive!</Text>
                <Text alignSelf="flex-start" mt={2} >Open to work in the Manchester, Sheffield or Leeds areas.</Text>
            </Flex>
        </Section>
    )
}

export default Profile;