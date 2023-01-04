import styled from "styled-components";
import { Container } from "./Container";
import { Navigation } from "./Navigation";
import { Presentation } from "./Presentation";

const StyledHeader = styled.header`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  background: #242431;
  position: relative;
	
	#container {
		position: relative;
	}

  #presentation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Container id="container">
        <Navigation />
        <Presentation id="presentation" />
      </Container>
    </StyledHeader>
  );
}
