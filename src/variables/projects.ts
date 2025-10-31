import { GITHUB_PROFILE_URL } from ".";
import { Project, ProjectBuilder } from "../builders/Project";
import jsonData from "Src/data/json/projects.json";

export const projects: Project[] = jsonData.map((project) => {
  return ProjectBuilder.one()
    .setTitle(project.title)
    .setDescription(project.description)
    .setLink(project.link)
    .setCover(project.cover)
    .setRepo(project.repo ? `${GITHUB_PROFILE_URL.replace(/\/$/, "")}/${project.repo}` : undefined)
    .setYear(project.year)
    .build();
});
