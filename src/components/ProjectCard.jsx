import { Card, Heading, Image, Text, Icon, Link, Flex } from "@chakra-ui/react";

const ProjectCard = ({ image, title, description, stackIcons, liveLink, repoLink }) => {

    return (
    <Card as="article" minW={300} maxW={400} >
        <Image src={image} alt="Screen shot of hosted project site" borderTopRadius="md" />
        <Flex flexDirection="column" p={4}>
            <Heading as="h4" fontSize="xl" >{title}</Heading>
            <Text>{description}</Text>
            <Flex gap={2} justifyContent="center" my={2} >
                {
                    stackIcons.map((icon, index) => (
                        <Icon as={icon} key={index} aria-label={`Tech icon ${icon}`} boxSize={10} />
                    ))
                }
            </Flex>
            <Flex gap={4} justifyContent="center">
                <Link href={liveLink}>Visit live site</Link>
                <Text>|</Text>
                <Link href={repoLink}>View the code</Link>
            </Flex>
        </Flex>
    </Card>
    )
}

export default ProjectCard;