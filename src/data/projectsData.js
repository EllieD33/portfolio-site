import { skillsIcons } from "./skillsIconsData";
import NewsHubImage from "../assets/NewsHub.png"; 
import WalkingWestYorksImage from "../assets/WalkingWestYorks.png";
import PortfolioImage from "../assets/Portfolio.png"; 
import WanderWaysImage from "../assets/WanderWays.png"

export const projects = [
    {
        id: 1,
        title: "WanderWays: Full stack mobile app",
        image: WanderWaysImage,
        description:
            "WanderWays is a full stack mobile app built using React Native. Originally built as part of a group project over an 8 day sprint, I have continued to develop both front and back end since graduation. With WanderWays, users can record their hikes live using location services, upload their routes to share with others, and explore existing routes uploaded by the community.",
        stackIcons: skillsIcons.filter(skills => skills.id === 1 || skills.id === 5 || skills.id === 6 || skills.id === 7 || skills.id === 8 || skills.id === 11 || skills.id === 12 || skills.id === 13),
        demoLink: "https://vimeo.com/999201294",
        repoLink: "https://github.com/EllieD33/walk-the-line-frontend",
    },
    {
        id: 2,
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
            "A dynamic, responsive website dedicated to exploring the picturesque walks of West Yorkshire! This project features a user-friendly front end built with Bootstrap 5, ensuring an adaptive design that looks great on all devices. The frontend leverages HTML5 for structure and JavaScript for form functionality, including validation and modal confirmations.",
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
            "You're looking at it! A frontend project built in node environment using React.js. I used ChakraUI to provide consistent, responsive styling with some additional CSS for an animated background.",
        stackIcons: skillsIcons.filter(skills => skills.id === 1 || skills.id === 3 || skills.id === 4 || skills.id === 7 || skills.id === 11),
        liveLink: "www.google.co.uk",
        repoLink: "www.github.com",
    },
];