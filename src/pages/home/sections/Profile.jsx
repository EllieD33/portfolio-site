import Section from "../../../components/Section"

const Profile = () => {
    const section = {
        title: "About Me",
        text: "I am a junior full stack developer. Harnessing my background in UX research, I am switching to a career in software engineering.  My knack for understanding user needs and accessibility principles will propel my journey into this new career. Embracing the ever-evolving nature of technology, I am driven by the perpetual need to learn and push the boundaries of my knowledge - this is when I truly thrive! Open to work in the Manchester, Sheffield or Leeds areas. ",
    }
    return (
        <Section {...section} />
    )
}

export default Profile;