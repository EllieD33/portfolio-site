import Section from "../../../components/Section";
import ProjectCard from "../../components/ProjectCard"
import { FaJs } from "react-icons/fa";

const Projects = () => {
    const section = {
        title: "Projects",
        text: "Here are some of my personal projects.",
    }

    const projects = [{
        key: 1,
        title: 'example title',
        image: 'image/path',
        description: 'short summary of project, a couple of sentences ideally I think',
        stackIcons: [FaJs],
        liveLink: "www.google.co.uk",
        repoLink: "www.github.com"
    }]

    const children = (
        <>
        {
            projects.map((project) => (
                <ProjectCard key={project.key} {...project} />
            ))
        }
        </>
    )

    return (
        <Section {...section} >
            {children}
        </Section>
    )
}

export default Projects;