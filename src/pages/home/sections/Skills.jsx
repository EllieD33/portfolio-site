import { Text, Flex, Image, Heading, useColorMode } from "@chakra-ui/react";
import Section from "../../../components/Section";
import { skillsIcons, learningIcons } from "../../../data/skillsIconsData";

const Skills = () => {
    const { colorMode } = useColorMode();

    return (
        <Section title="Skills">
            <Flex gap={5} flexWrap="wrap" justifyContent="center" mt={2} >
                {skillsIcons.map(({ id, src, darkSrc, label }) => (
                        <Flex key={id} flexDirection="column" alignItems="center" >
                            <Image src={darkSrc && colorMode === 'dark' ? darkSrc : src} boxSize={12} />
                            <Text>{label}</Text>
                        </Flex>
                        ))}
            </Flex>
            <Heading mt={4}  as="h3" fontSize="lg">Currently learning:</Heading>
            <Flex gap={5}>
                {learningIcons.map(({ id, src, label }) => (
                    <Flex key={id} mt={2} flexDirection="column" alignItems="center">
                        <Image src={src} boxSize={12} />
                        <Text>{label}</Text>
                    </Flex>
                ))}
            </Flex>
        </Section>
    )
}

export default Skills;