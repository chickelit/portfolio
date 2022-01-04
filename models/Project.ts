interface Project {
  id: number;
  title: string;
  description: string;
  image: {
    path: string;
  };
  viewMoreUrl: string;
}

export default Project;
