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
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                <a href={project.appLink} target="_blank">
                    <Button size="small">Check it out</Button>
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
