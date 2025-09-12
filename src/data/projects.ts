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
            "Using OpenAI to make unique restaurant recommendations based on bespoke user prompts.",
        repoLink: "https://airestaurantreccs.serena.software/",
        appLink: "https://restaurant-recommender-openai.vercel.app",
        logo: "/chef.jpeg",
    },
    {
        name: "RPG Notes App",
        description:
            "A full-stack application for tabletop RPG players to create and manage their session notes.",
        repoLink: "https://github.com/serenainzani/rpg-notes-app",
        appLink: "https://rpgnotes.serena.software/",
        logo: "/rpg.jpeg",
    },
];

export default projects;
