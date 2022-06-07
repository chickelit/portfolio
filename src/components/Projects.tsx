import styled from "styled-components";

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
  return (
    <section id="projects">
      <TitleWrapper>
        <h1>Projetos</h1>
      </TitleWrapper>
      <ProjectList>
        <Project>
          <Cover className="cover">
            <img
              src={"/img/chat-app-project.jpeg"}
              alt="Chat App project cover"
            />
          </Cover>
          <DetailsWrapper className="details">
            <h2>Chat App</h2>
            <Description>
              App de conversas em tempo real feito com Typescript, Vue, Nuxt e AdonisJS.
            </Description>
            <ViewMore
              href="https://github.com/jose13162/chat-app"
              target="_blank"
              className="view-more"
            >
              Ver mais...
            </ViewMore>
          </DetailsWrapper>
        </Project>
        <Project>
          <Cover className="cover">
            <img
              src={"/img/todo-app-project.png"}
              alt="Todo App project cover"
            />
          </Cover>
          <DetailsWrapper className="details">
            <h2>Todo App</h2>
            <Description>
              App de ToDo's feito com Typescript, Vue, Nuxt, Express e
              Sequelize.
            </Description>
            <ViewMore
              href="https://github.com/jose13162/todo-app"
              target="_blank"
              className="view-more"
            >
              Ver mais...
            </ViewMore>
          </DetailsWrapper>
        </Project>
        <Project>
          <Cover className="cover">
            <img
              src={"/img/chronometer-project.png"}
              alt="Chronometer project cover"
            />
          </Cover>
          <DetailsWrapper className="details">
            <h2>Chronometer</h2>
            <Description>
              Cronômetro simples feito com Typescript, React e Vite.
            </Description>
            <ViewMore
              href="https://github.com/jose13162/chronometer"
              target="_blank"
              className="view-more"
            >
              Ver mais...
            </ViewMore>
          </DetailsWrapper>
        </Project>
        <Project>
          <Cover className="cover">
            <img
              src={"/img/themed-app-project.png"}
              alt="Themed app project cover"
            />
          </Cover>
          <DetailsWrapper className="details">
            <h2>Themed app</h2>
            <Description>
              App simples com light/dark mode feito com Vite, React, Typescript e Stitches.
            </Description>
            <ViewMore
              href="https://github.com/jose13162/themed-app"
              target="_blank"
              className="view-more"
            >
              Ver mais...
            </ViewMore>
          </DetailsWrapper>
        </Project>
      </ProjectList>
    </section>
  );
}
