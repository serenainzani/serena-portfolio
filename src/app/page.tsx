import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import projects from "@/data/projects";
import { Typography } from "@mui/material";

export default function Home() {
    return (
        <main>
            <section>
                <Typography
                    textAlign="center"
                    sx={{
                        backgroundImage: `linear-gradient( to left, #ef32d9, #89fffd)`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                    }}
                    className="text-4xl sm:text-8xl mt-6 sm:mt-36 sm:mb-10"
                >
                    {"<Serena Inzani />"}
                </Typography>
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </section>
            <section>
                <Typography
                    textAlign="center"
                    sx={{
                        backgroundImage: `linear-gradient( to right, #ef32d9, #89fffd)`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                    }}
                    className="text-4xl sm:text-7xl mt-6 sm:mt-24 mb-4 sm:mb-8"
                >
                    About Me
                </Typography>
                <p className="sm:w-3/5 flex mx-auto text-center text-base sm:text-2xl px-8">
                    Web dev based in Edinburgh, UK. I love building full stack
                    web apps, especially with Next.js, TypeScript and Tailwind.
                    I am always looking to share and grow my knowledge in
                    personal projects, tech talks and mentoring.
                </p>
                <div className="flex justify-center mt-2 sm:mt-10 pb-10 sm:pb-20">
                    <SocialLink
                        href="https://www.linkedin.com/in/serena-inzani/"
                        src="/linkedin.svg"
                        alt="LinkedIn"
                    />
                    <SocialLink
                        href="https://www.github.com/serenainzani"
                        src="/github.svg"
                        alt="GitHub"
                    />
                </div>
            </section>
        </main>
    );
}
