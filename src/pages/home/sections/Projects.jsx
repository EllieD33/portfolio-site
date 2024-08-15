import Section from "../../../components/Section";
import ProjectCard from "../../../components/ProjectCard";
import { Flex } from "@chakra-ui/react";
import { skillsIcons } from "../../../data/skillsIconsData";
import NewsHubImage from "../../../assets/NewsHub.png"; 
import WalkingWestYorksImage from "../../../assets/WalkingWestYorks.png"
import PortfolioImage from "../../../assets/Portfolio.png"; 

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "NewsHub: Full stack web app",
            image: NewsHubImage,
            description:
                "A full stack web app inspired by the functionality of Reddit! The backend comprises a RESTful API that serves up articles, users, topics, and comments in JSON format, providing endpoints for CRUD operations. The frontend was developed using React.js, with Chakra UI for managing styling.",
            stackIcons: skillsIcons.filter(skills => skills.id === 1 || skills.id === 4 || skills.id === 7 || skills.id === 8 || skills.id === 11 || skills.id === 12),
            liveLink: "https://newshub2024.netlify.app/",
            repoLink: "https://github.com/EllieD33/fe-news",
        },
        {
            id: 2,
            title: "Walking West Yorkshire",
            image: WalkingWestYorksImage,
            description:
                "This frontend project focused on creating a responsive website using Bootstrap 5.",
            stackIcons: skillsIcons.filter(skills => skills.id === 1 || skills.id === 2 || skills.id === 3 || skills.id === 9),
            liveLink:
                "https://ellied33.github.io/Walking-Website-Responsive/index.html",
            repoLink: "https://github.com/EllieD33/Walking-Website-Responsive",
        },
        {
            id: 3,
            title: "Portfolio site",
            image: PortfolioImage,
            description:
                "You're looking at it! A frontend project using React.js and ChakraUI.",
            stackIcons: skillsIcons.filter(skills => skills.id === 1 || skills.id === 3 || skills.id === 4 || skills.id === 7 || skills.id === 11),
            liveLink: "www.google.co.uk",
            repoLink: "www.github.com",
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
