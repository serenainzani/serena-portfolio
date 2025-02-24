import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import { Project } from "@/data/projects";

export default function Home() {
    return (
        <main>
            <section>
                <h1 className="text-4xl">{`<Serena Inzani />`}</h1>
                <p className="tagline">Full Stack Software Engineer</p>
            </section>
            <section>
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </section>
        </main>
    );
}
