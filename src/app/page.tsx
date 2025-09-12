import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import projects from "@/data/projects";
import { Typography } from "@mui/material";

export default function Home() {
    return (
        <main>
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
                className="text-4xl sm:text-8xl mt-12 sm:mt-20 sm:mb-3"
            >
                {"<Serena Inzani />"}
            </Typography>
            <p className="sm:w-1/2 flex mx-auto text-center text-base sm:text-xl px-8 sm:py-12 py-5">
                Hi, I&apos;m a Full Stack Web Developer with a passion for
                building impactful, user-focused applications. I specialize in
                TypeScript, React, and Node.js within FinTech. In my career
                I&apos;ve worked across diverse tech stacks including Java,
                Python, SQL, and cloud-native tools like Kubernetes and GCP.
            </p>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </section>
            <section>
                <div className="flex justify-center mt-2 sm:mt-5 pb-10 sm:pb-20">
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
