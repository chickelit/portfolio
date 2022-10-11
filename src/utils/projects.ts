import { Project } from "./Project";

const BASE_URL_FOR_IMAGES = "/public/img/".replace(/\/$/, "");
const GITHUB_PROFILE_URL = "https://github.com/jose13162/".replace(/\/$/, "");

export const projects: Project[] = [
  new Project({
    title: "Chat App",
    description:
      "Site de conversas em tempo real feito com Typescript, Adonis, Vue e Nuxt",
    link: `${GITHUB_PROFILE_URL}/chat-app`,
    cover: {
      url: "/public/img/chat-app-project.jpeg",
    },
  }),
  new Project({
    title: "Todo App",
    description:
      "Site de gerenciamento de tarefas feito com Typescript, Express, Vue e Nuxt",
    link: `${GITHUB_PROFILE_URL}/todo-app`,
    cover: {
      url: "/public/img/todo-app-project.png",
    },
  }),
  new Project({
    title: "Chronometer",
    description: "Cronômetro simples feito com Typescript, React e Vite",
    link: `${GITHUB_PROFILE_URL}/chronometer`,
    cover: {
      url: "/public/img/chronometer-project.png",
    },
  }),
  new Project({
    title: "Themed App",
    description:
      "Site tematizado com temas claro e escuro feito com Typescript, React, Vite e Stitches",
    link: `${GITHUB_PROFILE_URL}/themed-app`,
    cover: {
      url: "/public/img/themed-app-project.png",
    },
  }),
	new Project({
    title: "Blog",
    description:
      "Home page para um blog feito com Typescript, React, Vite e Stitches",
    link: `${GITHUB_PROFILE_URL}/react-blog`,
    cover: {
      url: "/public/img/blog-project.jpeg",
    },
  }),
  new Project({
    title: "Url Shortener",
    description:
      "Encurtador de links feito com Typescript, Express, React e Vite",
    link: `${GITHUB_PROFILE_URL}/url-shortener`,
    cover: {
      url: "/public/img/url-shortener-project.jpeg",
    },
  }),
];
