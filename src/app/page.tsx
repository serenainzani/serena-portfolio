import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import { Project } from "@/data/projects";
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
                    className="text-4xl sm:text-8xl mt-6 sm:mt-36 sm:mb-8"
                >
                    {"<Serena Inzani />"}
                </Typography>
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </section>
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
                className="text-3xl sm:text-7xl mt-6 sm:mt-32 mb-4 sm:mb-8"
            >
                About Me
            </Typography>
            <p className="sm:w-3/5 flex mx-auto text-center text-base sm:text-2xl px-8">
                I am a Full Stack Software Engineer with a strong foundation in
                TypeScript, React, and Node.js. I’ve worked across a wide range
                of technologies and languages, from Java to TypeScript to SQL.
                In my career, I have built and maintained a variety of
                high-traffic front ends to deploying scalable back end APIs and
                microservices. I am an advocate for continuous learning, and
                love sharing this knowledge through my personal projects, tech
                talks, and mentoring.
            </p>
        </main>
    );
}
