import styled from "styled-components";
import { Container } from "./Container";

const Section = styled.section`
  padding: 7rem;

  h2 {
    grid-area: title;
    font-size: 3rem;
    text-align: center;
  }

  p {
    grid-area: description;
    width: 100%;
    max-width: 32rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  grid-template-areas: "title title" "picture description";
  justify-content: center;
  align-items: center;
  gap: 5rem;
  column-gap: 7rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(max-content, 3);
    grid-template-areas: "title" "picture" "description";
    justify-items: center;

    p {
      text-align: center;
    }
  }

	@media (max-width: 648px) {
    h2 {
			font-size: 2rem;
		}
  }
`;

const Picture = styled.div`
  grid-area: picture;
  position: relative;
  width: 15rem;
  aspect-ratio: 1 /1;

  img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Ring = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background: #375c86;
  border-radius: 50%;
  animation: pulsing 3s ease-out infinite;

  @keyframes pulsing {
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }

  :nth-last-of-type(1) {
    animation-delay: -1s;
  }

  :nth-last-of-type(2) {
    animation-delay: -2s;
  }
`;

export function AboutMe() {
  return (
    <Section id="about-me">
      <Container>
        <Grid>
          <h2>Sobre mim</h2>
          <Picture>
            <img src={"/img/me.jpeg"} alt="Picture of José Anselmo" />
            <Ring></Ring>
            <Ring></Ring>
            <Ring></Ring>
          </Picture>
          <p>
            Opa, me chamo josé. Sou um desenvolvedor fullstack, atualmente
            procuro por um estágio. Costumo desenvolver Frontend com React e
            Typescript, e Backend com Node.js ou AspNet Core.
          </p>
        </Grid>
      </Container>
    </Section>
  );
}
