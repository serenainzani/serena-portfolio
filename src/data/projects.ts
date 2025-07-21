export type Project = {
    name: string;
    description: string;
    repoLink: string;
    appLink?: string;
    logo: string;
};

const projects: Project[] = [
    {
        name: "AI Restaurant Recommender",
        description:
            "A full-stack application that uses OpenAI to recommend restaurants based on bespoke user prompts about their preferences and location.",
        repoLink:
            "https://github.com/serenainzani/restaurant-recommender-openai",
        appLink: "https://restaurant-recommender-openai.vercel.app",
        logo: "/chef.jpeg",
    },
    {
        name: "RPG Notes App",
        description:
            "A full-stack application for tabletop RPG players to create and manage their session notes. Players can make, edit and delete notes, as well as filter based on note category",
        repoLink: "https://github.com/serenainzani/rpg-notes-app",
        appLink: "https://rpg-notes-app.vercel.app/",
        logo: "/rpg.jpeg",
    },
];

export default projects;
