export type Project = {
    name: string;
    description: string;
    repoLink: string;
    appLink?: string;
};

const projects: Project[] = [
    {
        name: "Restaurant Recommender, powered by OpenAI",
        description:
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        repoLink:
            "https://github.com/serenainzani/restaurant-recommender-openai",
        appLink: "https://restaurant-recommender-openai.vercel.app",
    },
    {
        name: "Restaurant Recommender, powered by OpenAI",
        description:
            "as dsf ds fds f ds f ds f ds f ds f dsfdsfdsfds fdsfds f dsf  f ffdfssd f f",
        repoLink:
            "https://github.com/serenainzani/restaurant-recommender-openai",
        appLink: "https://restaurant-recommender-openai.vercel.app",
    },
];

export default projects;
