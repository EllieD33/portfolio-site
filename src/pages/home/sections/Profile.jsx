import { Text, Flex, Box } from "@chakra-ui/react";
import Section from "../../../components/Section";
import Map from "../../../components/Map";

const Profile = () => {
    return (
        <Section title="About Me">
            <Flex maxW={670} >
                <Box 
                    flex="1"
                    p={4}
                >
                    <Text>
                        I'm a junior full stack developer. Harnessing my
                        background in UX research, I am switching to a career in
                        software engineering. My knack for understanding user
                        needs and accessibility principles will propel my
                        journey into this new career. Embracing the
                        ever-evolving nature of technology, I am driven by the
                        perpetual need to learn and push the boundaries of my
                        knowledge - this is when I truly thrive!
                    </Text>
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        mt={2}
                        mx="auto"
                        minW={340}
                    >
                        <Text fontWeight="bold" mb={2} >
                            Open to remote work or hybrid/on-site in the
                            Manchester, Sheffield or Leeds areas.
                        </Text>
                        <Map />
                    </Flex>
                </Box>
            </Flex>
        </Section>
    );
};

export default Profile;
