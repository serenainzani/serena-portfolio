import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Icon, IconButton } from "@mui/material";
import { Project } from "@/data/projects";
import Image from "next/image";

type ProjectProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectProps) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardMedia
                sx={{ height: 238, backgroundPosition: "top" }}
                image={project.logo}
                title="app-logo"
            />
            <CardContent>
                <a href={project.repoLink} target="_blank">
                    <Typography
                        gutterBottom
                        component="div"
                        sx={{
                            backgroundImage: `linear-gradient( to right, #312e81, #7c3aed)`,
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "bold",
                        }}
                        className="text-xl"
                    >
                        {project.name}
                    </Typography>
                </a>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ marginTop: "auto", justifyContent: "space-evenly" }}
                className="mb-3"
            >
                <a href={project.appLink} target="_blank">
                    <Button
                        variant="outlined"
                        sx={{ textTransform: "none" }}
                        className="text-white border-indigo-950 bg-indigo-950 text-lg transition-transform duration-200 hover:scale-105 hover:bg-indigo-800 hover:border-indigo-800"
                    >
                        Check it out
                    </Button>
                </a>
                <a href={project.repoLink} target="_blank">
                    <IconButton
                        color="primary"
                        aria-label="github"
                        className="transform transition-transform duration-200 hover:scale-110"
                    >
                        <Icon fontSize="large">
                            <Image
                                src="/github-black.svg"
                                width={48}
                                height={48}
                                alt="github"
                            />
                        </Icon>
                    </IconButton>
                </a>
            </CardActions>
        </Card>
    );
}
