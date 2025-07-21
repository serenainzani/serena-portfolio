import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Icon, IconButton } from "@mui/material";
import { Project } from "@/data/projects";

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
                <Typography
                    gutterBottom
                    component="div"
                    className="text-purple-800 text-3xl"
                >
                    {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ marginTop: "auto", justifyContent: "space-evenly" }}
            >
                <a href={project.appLink} target="_blank">
                    <Button size="small" className="text-purple-800 text-base">
                        Check it out
                    </Button>
                </a>
                <a href={project.repoLink} target="_blank">
                    <IconButton color="primary" aria-label="github">
                        <Icon>
                            <img src="/github.svg" alt="github" />
                        </Icon>
                    </IconButton>
                </a>
            </CardActions>
        </Card>
    );
}
