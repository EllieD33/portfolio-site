import Section from "../../../components/Section";
import ProjectCard from "../../../components/ProjectCard";
import { Flex } from "@chakra-ui/react";
import { projects } from "../../../data/projectsData";

const Projects = () => {
    return (
        <Section title="Projects">
            <Flex m={5} gap={5} justifyContent="center" flexWrap="wrap">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </Flex>
        </Section>
    );
};

export default Projects;
