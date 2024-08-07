import { Text, Flex, Image, Heading } from "@chakra-ui/react";
import Section from "../../../components/Section"

const Skills = () => {
    const skillsIcons = [
        {
            id: 1,
            src: "https://img.icons8.com/color/48/javascript--v1.png",
            label: 'JavaScript',
        },
        {
            id: 2,
            src: "https://img.icons8.com/color/48/nodejs.png",
            label: 'Node.js'
        },
        {
            id: 3,
            src: "https://img.icons8.com/plasticine/48/postgreesql.png",
            label: 'PostgreSQL',
        },
        {
            id: 4,
            src: "https://img.icons8.com/color/48/express-js.png",
            label: 'Express.js',
        },
        {
            id: 5,
            src: "https://img.icons8.com/color/48/react-native.png",
            label: 'React.js',
        },
        {
            id: 6,
            src: "https://img.icons8.com/color/48/html-5.png",
            label: 'HTML',
        },
        {
            id: 7,
            src: "https://img.icons8.com/color/48/css3.png",
            label: 'CSS',
        },
        {
            id: 8,
            src: "https://img.icons8.com/color/48/chakra-ui.png",
            label: 'Chakra UI',
        },
        {
            id: 9,
            src: "https://img.icons8.com/color/48/bootstrap--v2.png",
            label: 'Bootstrap',
        },
        {
            id: 10,
            src: "https://img.icons8.com/color/48/git.png",
            label: 'Git',
        },
        {
            id: 11,
            src: "https://img.icons8.com/color/48/redux.png",
            label: 'Redux',
        },
        {
            id: 12,
            src: "https://img.icons8.com/color/48/expo.png",
            label: 'Expo',
        },
        {
            id: 13,
            src: "https://img.icons8.com/color/48/react-native.png",
            label: 'React Native',
        },
    ];

    const learningIcons = [
        { id: 1, src: "https://img.icons8.com/ios-filled/50/7506B1/c-sharp-logo.png", label: 'C#' },
        { id: 2, src: "https://img.icons8.com/color/48/net-framework.png", label: '.NET' },
    ];

    return (
        <Section title="Skills">
            <Flex gap={5} flexWrap="wrap" justifyContent="center" mt={2} >
                {skillsIcons.map(({ id, src, label }) => (
                        <Flex key={id} flexDirection="column" alignItems="center" >
                            <Image src={src} boxSize={12} />
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