import { Card, Heading, Image, Text, Icon, Link } from "@chakra-ui/react";

const ProjectCard = ({ image, title, description, stackIcons, liveLink, repoLink }) => {

    return (
    <Card as="article">
        <Image src={image} alt="Screen shot of hosted project site" />
        <Heading as="h4" >{title}</Heading>
        <Text>{description}</Text>
        {
            stackIcons.map((icon, index) => {
                <Icon as={icon} key={index} aria-label={`Tech icon ${icon}`} />
            })
        }
        <Link href={liveLink}>Visit live site</Link>
        <Link href={repoLink}>View the code</Link>
    </Card>
    )
}

export default ProjectCard;