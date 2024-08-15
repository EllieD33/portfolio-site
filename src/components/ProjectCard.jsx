import { Card, Heading, Image, Text, Link, Flex, useColorMode } from "@chakra-ui/react";

const ProjectCard = ({ image, title, description, stackIcons, liveLink, demoLink, repoLink }) => {
    const { colorMode } = useColorMode();

    return (
    <Card as="article" minW={300} maxW={400}>
        <Image 
            src={image} 
            alt="Screen shot of hosted project site" 
            width="100%" 
            maxH={204}
            transition="transform 0.3s ease-in-out" 
            _hover={{ transform: "scale(1.50)", zIndex: 2, boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
            }} 
        />     
        <Flex flexDirection="column" p={4} borderTop="1px" justifyContent="space-between" flexGrow={1} >
            <Flex flexDirection="column">
                <Heading as="h4" fontSize="xl">{title}</Heading>
                <Text>{description}</Text>
            </Flex>
            <Flex flexDirection="column">
                <Flex wrap="wrap"  gap={2} justifyContent="center" my={2} borderTop="2px" borderColor="purple.600" pt={3} minH={167} alignItems="center">
                    {
                        stackIcons.map((icon) => (
                            <Flex key={icon.id} flexDirection="column" alignItems="center">
                                <Image src={icon.darkSrc && colorMode === 'dark' ? icon.darkSrc : icon.src} boxSize={12} />
                                <Text>{icon.label}</Text>
                            </Flex>
                        ))
                    }
                </Flex>
                <Flex gap={4} justifyContent="center" borderTop="2px" borderColor="purple.600" pt={3} >
                    <Link href={liveLink ? liveLink : demoLink} isExternal>{liveLink ? "Visit live site" : "View demo"}</Link>
                    <Text>|</Text>
                    <Link href={repoLink} isExternal>View the code</Link>
                </Flex>
            </Flex>
        </Flex>
    </Card>
    )
}

export default ProjectCard;