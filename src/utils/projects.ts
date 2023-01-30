import { Project } from "./Project";
import chatAppProjectImage from "../../public/img/chat-app-project.jpeg";
import todoAppProjectImage from "../../public/img/todo-app-project.png";
import chronometerProjectImage from "../../public/img/chronometer-project.png";
import themedAppProjectImage from "../../public/img/themed-app-project.png";
import urlShortenerProjectImage from "../../public/img/url-shortener-project.jpeg";
import reactBlogProjectImage from "../../public/img/blog-project.jpeg";
import calculatorProjectImage from "../../public/img/calculator-project.png";

const GITHUB_PROFILE_URL = "https://github.com/jose13162/".replace(/\/$/, "");

export const projects: Project[] = [
  new Project({
    title: "Web Chat",
    description:
      "Site de conversas responsivo e em tempo real feito com NodeJS, mais especificamente com AdonisJS no Backend e Vue + Nuxt no Frontend, além de ser estilizado com SCSS. Todo o código foi desenvolvido com Typescript.",
    link: `${GITHUB_PROFILE_URL}/chat-app`,
    cover: {
      url: chatAppProjectImage,
    },
  }),
  new Project({
    title: "Todo Manager",
    description:
      "Site de gerenciamento de tarefas feito com Typescript. Express no Backend e Vue + Nuxt no Frontend. Estilizado com SCSS.",
    link: `${GITHUB_PROFILE_URL}/todo-app`,
    cover: {
      url: todoAppProjectImage,
    },
  }),
  new Project({
    title: "Chronometer",
    description:
      "Cronômetro simples feito com Typescript e React + Vite. Estilizado com CSS puro.",
    link: `${GITHUB_PROFILE_URL}/chronometer`,
    cover: {
      url: chronometerProjectImage,
    },
  }),
  new Project({
    title: "Maratona Explorer 2",
    description:
      "Site de compartilhamento de redes sociais desenvolvido durante um pequeno curso da Rocketseat. Feito com Typescript e React + Vite. Estilizado através do Stitches.",
    link: `${GITHUB_PROFILE_URL}/themed-app`,
    cover: {
      url: themedAppProjectImage,
    },
  }),
  new Project({
    title: "Blog",
    description:
      "Home page para um blog feito com Typescript, React + Vite e Stitches",
    link: `${GITHUB_PROFILE_URL}/react-blog`,
    cover: {
      url: reactBlogProjectImage,
    },
  }),
  new Project({
    title: "Url Shortener",
    description:
      "Encurtador de links feito com Typescript. Express no Backend e React + Vite no Frontend. Estilizado com CSS puro.",
    link: `${GITHUB_PROFILE_URL}/url-shortener`,
    cover: {
      url: urlShortenerProjectImage,
    },
  }),
  new Project({
    title: "Calculadora",
    description:
      "Calculadora feita com Typescript e React + Vite. Estilizada com CSS puro.",
    link: `${GITHUB_PROFILE_URL}/calculator`,
    cover: {
      url: calculatorProjectImage,
    },
  }),
];
