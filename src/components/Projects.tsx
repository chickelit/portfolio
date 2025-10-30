import { Box, Link, Paper, Typography } from "@mui/material";
import { projects } from "../variables/projects";
import { ResponsiveContainer } from "./ResponsiveContainer";
import type { Project } from "Src/builders/Project";
import NorthEastIcon from "@mui/icons-material/NorthEast";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Paper className="p-6 max-w-3xl grid grid-flow-row place-items-center sm:grid-flow-col sm:grid-cols-[max-content_1fr] sm:place-items-stretch gap-8">
      <img src={project.cover.url} alt={project.title} className="w-36 aspect-square object-cover rounded-lg" />
      <Box className="grid grid-rows-[max-content_1fr_max-content]">
        <Typography component="h3" variant="h6">
          {project.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {project.description}
        </Typography>
        <Box className="grid grid-flow-col auto-cols-max gap-6">
          <Link
            href={project.repo}
            underline="none"
            color={project.repo ? "info" : "textSecondary"}
            target="_blank"
            className={`cursor-pointer w-max grid grid-flow-col place-items-center gap-1.5 transition-all ease-linear duration-150 hover:opacity-75 ${
              project.repo ? "" : "opacity-30 pointer-events-none"
            }`}
          >
            Ver repositório
          </Link>
          <Link
            href={project.link}
            underline="none"
            color={project.link ? "secondary" : "textSecondary"}
            target="_blank"
            className={`cursor-pointer w-max grid grid-flow-col place-items-center gap-1.5 transition-all ease-linear duration-150 hover:opacity-75 ${
              project.link ? "" : "opacity-30 pointer-events-none"
            }`}
          >
            Ver projeto <NorthEastIcon fontSize="small" />
          </Link>
        </Box>
      </Box>
    </Paper>
  );
}

export function Projects() {
  return (
    <Box component="section" id="projetos">
      <Box className="grid grid-rows-[max-content_1fr] gap-12 place-items-center">
        <Box sx={{ bgcolor: "primary.main" }} className="h-36 w-screen grid place-items-center">
          <Typography component="h2" variant="h4">
            Projetos
          </Typography>
        </Box>
        <ResponsiveContainer>
          <Box className="grid grid-flow-row place-items-center gap-4">
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.title} />;
            })}
          </Box>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
