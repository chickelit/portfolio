import styled from "styled-components";
import { projects } from "../utils/projects";
import { Container } from "./Container";

const StyledSection = styled.section`
  display: grid;
  gap: 3rem;
`;

const Title = styled.h3`
  display: grid;
  place-content: center;
  width: 100%;
  /* position: fixed; */
  height: 16rem;
  background: #ff7f50;
  color: #eeeeee;
  font-size: 2.5rem;
`;

const ProjectList = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  justify-content: center;
  gap: 1rem;
`;

const Project = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 5rem;

  div.details {
    width: 100%;
    height: 100%;
    max-width: 32rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content max-content;
    align-content: space-between;

    a {
      color: #375c86;
      transition: all 0.15s linear;
      text-decoration: none;

      &:hover {
        color: #3e6897;
      }
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    h2 {
      font-size: 1.5rem;
      line-height: 2rem;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  div.cover {
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 0 0 4px #ff7f50;
    width: 12rem;
    aspect-ratio: 1 / 1;
    display: grid;

    img {
      border-radius: 50%;
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }

  @media (max-width: 648px) {
		padding: 1.5rem;
    gap: 2rem;

    div.cover {
      width: 8rem;
    }

		div.details p {
			-webkit-line-clamp: 3;
		}
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
    <StyledSection id="projects">
      <Title>Projetos</Title>
      <Container>
        <ProjectList>
          {projects.map((project) => {
            return (
              <Project key={generateKey()}>
                <div className="cover">
                  <img src={project.cover.url} alt={project.title} />
                </div>
                <div className="details">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" className="view-more">
                    Ver mais...
                  </a>
                </div>
              </Project>
            );
          })}
        </ProjectList>
      </Container>
    </StyledSection>
  );
}
