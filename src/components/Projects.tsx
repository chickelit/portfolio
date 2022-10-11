import styled from "styled-components";
import { projects } from "../utils/projects";

const TitleWrapper = styled.div`
  width: 100%;
  height: 32rem;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;

  &:before {
    position: absolute;
    content: "";
    width: calc(100% + 4rem);
    height: 16rem;
    background: #ff7f50;
    transform: rotate(7.5deg);
  }

  h1 {
    position: absolute;
    color: #eeeeee;
    font-size: 2.5rem;
  }
`;

const ProjectList = styled.div`
  margin: 4rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-auto-rows: 32rem;
  justify-content: center;
  gap: 3rem;
`;

const Project = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const Cover = styled.div`
  border-radius: 50%;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.8);
  width: 12rem;
  aspect-ratio: 1 / 1;
  display: grid;

  img {
    border-radius: 50%;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;

const DetailsWrapper = styled.div`
  height: 80%;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;
  gap: 2rem;
  justify-items: center;
`;

const Description = styled.p`
  text-align: center;
`;

const ViewMore = styled.a`
  color: #375c86;
  transition: all 0.15s linear;
  text-decoration: none;

  &:hover {
    color: #3e6897;
  }
`;

export function Projects() {
  const generateKey = (function () {
    let id = 0;

    return function () {
      return ++id;
    };
  })();

  return (
    <section id="projects">
      <TitleWrapper>
        <h1>Projetos</h1>
      </TitleWrapper>
      <ProjectList>
        {projects.map((project) => {
          return (
            <Project key={generateKey()}>
              <Cover className="cover">
                <img src={project.cover.url} alt={project.title} />
              </Cover>
              <DetailsWrapper className="details">
                <h2>{project.title}</h2>
                <Description>{project.description}</Description>
                <ViewMore
                  href={project.link}
                  target="_blank"
                  className="view-more"
                >
                  Ver mais...
                </ViewMore>
              </DetailsWrapper>
            </Project>
          );
        })}
      </ProjectList>
    </section>
  );
}
