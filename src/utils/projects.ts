import { Project } from "./Project";
import chatAppProjectImage from "../../public/img/chat-app-project.jpeg";
import todoAppProjectImage from "../../public/img/todo-app-project.png";
import chronometerProjectImage from "../../public/img/chronometer-project.png";
import themedAppProjectImage from "../../public/img/themed-app-project.png";
import urlShortenerProjectImage from "../../public/img/url-shortener-project.jpeg";
import reactBlogProjectImage from "../../public/img/blog-project.jpeg";

const GITHUB_PROFILE_URL = "https://github.com/jose13162/".replace(/\/$/, "");

export const projects: Project[] = [
  new Project({
    title: "Chat App",
    description:
      "Site de conversas em tempo real feito com Typescript, Adonis, Vue e Nuxt",
    link: `${GITHUB_PROFILE_URL}/chat-app`,
    cover: {
      url: chatAppProjectImage,
    },
  }),
  new Project({
    title: "Todo App",
    description:
      "Site de gerenciamento de tarefas feito com Typescript, Express, Vue e Nuxt",
    link: `${GITHUB_PROFILE_URL}/todo-app`,
    cover: {
      url: todoAppProjectImage,
    },
  }),
  new Project({
    title: "Chronometer",
    description: "Cronômetro simples feito com Typescript, React e Vite",
    link: `${GITHUB_PROFILE_URL}/chronometer`,
    cover: {
      url: chronometerProjectImage,
    },
  }),
  new Project({
    title: "Themed App",
    description:
      "Site tematizado com temas claro e escuro feito com Typescript, React, Vite e Stitches",
    link: `${GITHUB_PROFILE_URL}/themed-app`,
    cover: {
      url: themedAppProjectImage,
    },
  }),
  new Project({
    title: "Blog",
    description:
      "Home page para um blog feito com Typescript, React, Vite e Stitches",
    link: `${GITHUB_PROFILE_URL}/react-blog`,
    cover: {
      url: reactBlogProjectImage,
    },
  }),
  new Project({
    title: "Url Shortener",
    description:
      "Encurtador de links feito com Typescript, Express, React e Vite",
    link: `${GITHUB_PROFILE_URL}/url-shortener`,
    cover: {
      url: urlShortenerProjectImage,
    },
  }),
];
