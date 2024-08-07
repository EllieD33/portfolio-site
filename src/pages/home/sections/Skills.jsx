import { Icon, Text, Flex } from "@chakra-ui/react";
import { SiChakraui, SiExpress, SiRedux, SiExpo } from "react-icons/si";
import { FaJs, FaNodeJs,FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import Section from "../../../components/Section"

const Skills = () => {
    const skillsIcons = [
        {
            id: 1,
            icon: FaJs,
            label: 'JavaScript',
        },
        {
            id: 2,
            icon: FaNodeJs,
            label: 'Node.js'
        },
        {
            id: 3,
            icon: BiLogoPostgresql,
            label: 'PostgreSQL',
        },
        {
            id: 4,
            icon: SiExpress,
            label: 'Express.js',
        },
        {
            id: 5,
            icon: FaReact,
            label: 'React.js',
        },
        {
            id: 6,
            icon: FaHtml5,
            label: 'HTML',
        },
        {
            id: 7,
            icon: FaCss3Alt, 
            label: 'CSS',
        },
        {
            id: 8,
            icon: SiChakraui,
            label: 'Chakra UI',
        },
        {
            id: 9,
            icon: FaBootstrap,
            label: 'Bootstrap',
        },
        {
            id: 10,
            icon: FaGitAlt,
            label: 'Git',
        },
        {
            id: 11,
            icon: SiRedux,
            label: 'Redux',
        },
        {
            id: 12,
            icon: SiExpo,
            label: 'Expo',
        },
        {
            id: 13,
            icon: FaReact,
            label: 'React Native',
        },
    ]

    const content = (
        <Flex gap={5} flexWrap="wrap" justifyContent="center" mt={2} >
                {skillsIcons.map(({ id, icon, label }) => (
                        <Flex key={id} flexDirection="column" alignItems="center" >
                            <Icon as={icon} boxSize={12} />
                            <Text>{label}</Text>
                        </Flex>
                        ))}
        </Flex>
    )

    const section = {
        title: "Skills",
        text: "I have experience using these technologies. Check out my projects to see some of the ways I have used them.",
    }

    return (
        <Section {...section}>
            {content}
        </Section>
    )
}

export default Skills;