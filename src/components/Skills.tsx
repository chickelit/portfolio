import styled from "styled-components";
import { Container } from "./Container";

const Section = styled.section`
  padding: 8rem 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  gap: 3rem;
`;

const Title = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  height: 3.5rem;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    background: #18181e;
  }

  h4 {
    background: #eee;
    padding: 0 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 2.25rem;
    text-align: center;
  }

  @keyframes come {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(1rem);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes go {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-1rem);
    }

    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    &:before {
      content: "";
      position: absolute;
      width: 33vw;
      height: 2px;
      left: 0;
      top: 0;
      transform: translateY(0);
      background: #18181e;
      animation: come 3s infinite;
    }

    &:after {
      content: "";
      position: absolute;
      width: 33vw;
      height: 2px;
      right: 0;
      bottom: 0;
      background: #18181e;
      animation: go 3s infinite;
    }
  }
`;

const SkillList = styled.div`
  width: 100%;
  overflow-wrap: break-word;
  text-align: center;
`;

const Skill = styled.div`
  border: 3px solid #eee;
  box-shadow: 0 0 0 2px #ff7f50;
  margin: 0.5rem;
  width: max-content;
  height: 2rem;
  display: inline-block;
  padding: 0 1rem;
  background: #375c86;
  border-radius: 1.4375rem;
  line-height: 2rem;
  color: #eeeeee;
`;

export function Skills() {
  return (
    <Container>
      <Section id="skills">
        <Grid>
          <Title>
            <h4>Habilidades</h4>
          </Title>
          <SkillList>
            <Skill>HTML5</Skill>
            <Skill>CSS3</Skill>
            <Skill>Javascript</Skill>
            <Skill>ES6+</Skill>
            <Skill>Typescript</Skill>
            <Skill>NodeJS</Skill>
            <Skill>SCSS</Skill>

            <Skill>Vue</Skill>
            <Skill>Nuxt</Skill>
            <Skill>Vite</Skill>
            <Skill>React</Skill>
            <Skill>Styled Components</Skill>
            <Skill>Stitches</Skill>

            <Skill>Express</Skill>
            <Skill>Sequelize</Skill>
            <Skill>AdonisJS</Skill>
            <Skill>Japa</Skill>
            <Skill>MySQL</Skill>
            <Skill>Docker</Skill>

            <Skill>C#</Skill>
            <Skill>DotNet</Skill>
            <Skill>AspNet Core</Skill>
            <Skill>Entity Framework Core</Skill>
          </SkillList>
        </Grid>
      </Section>
    </Container>
  );
}
