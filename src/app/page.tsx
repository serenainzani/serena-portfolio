import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import { Project } from "@/data/projects";
import { Typography } from "@mui/material";

export default function Home() {
    return (
        <main>
            <section>
                <Typography
                    variant="h1"
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
                    className="mt-36 mb-8"
                >
                    {"<Serena Inzani />"}
                </Typography>
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </section>
        </main>
    );
}
