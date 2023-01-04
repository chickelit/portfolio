import styled from "styled-components";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

const StyledSection = styled.section`
  /* padding: 0 1rem;
  box-sizing: border-box; */
`;

export function Content() {
  return (
    <StyledSection>
      <AboutMe />
      <Projects />
      <Skills />
    </StyledSection>
  );
}
