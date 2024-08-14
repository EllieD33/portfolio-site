import Section from "../../../components/Section";
import ProjectCard from "../../../components/ProjectCard";
import { Flex } from "@chakra-ui/react";
import { SiChakraui } from "react-icons/si";
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Walking West Yorkshire",
            image: "https://placehold.co/600x400/000000/FFFFFF.png",
            description:
                "This frontend project focused on creating a responsive website using Bootstrap 5.",
            stackIcons: [FaHtml5, FaCss3Alt, FaBootstrap, FaJs],
            liveLink:
                "https://ellied33.github.io/Walking-Website-Responsive/index.html",
            repoLink: "https://github.com/EllieD33/Walking-Website-Responsive",
        },
        {
            id: 2,
            title: "Portfolio site",
            image: "https://placehold.co/600x400/000000/FFFFFF.png",
            description:
                "You're looking at it! A frontend project using React.js and ChakraUI.",
            stackIcons: [FaReact, SiChakraui, FaJs],
            liveLink: "www.google.co.uk",
            repoLink: "www.github.com",
        },
        {
            id: 3,
            title: "NewsHub: Full stack web app",
            image: "/src/assets/NewsHub.png",
            description:
                "A full stack web app inspired by the functionality of Reddit! The backend comprises a RESTful API that serves up articles, users, topics, and comments in JSON format, providing endpoints for CRUD operations. The frontend was developed using React.js, with Chakra UI for managing styling.",
            stackIcons: [FaJs, FaReact, SiChakraui, ],
            liveLink: "https://newshub2024.netlify.app/",
            repoLink: "https://github.com/EllieD33/fe-news",
        },
    ];

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
