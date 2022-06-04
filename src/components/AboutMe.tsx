import styled from "styled-components";

const Section = styled.section`
  margin: 5rem 10rem;
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 5rem;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 5rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media (max-width: 600px) {
    margin: 5rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 40rem;
  display: grid;
  gap: 2rem;

  h2 {
    font-size: 3rem;
  }

  @media (max-width: 1024px) {
    justify-items: center;

    p {
      text-align: center;
    }
  }
`;

const Picture = styled.div`
  position: relative;
  width: 18.75rem;
  aspect-ratio: 1 /1;

  img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (max-width: 600px) {
    width: 15rem;
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
      transform: scale(1.4);
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
        <h2>Sobre mim</h2>
        <p>
          Opa, me chamo josé. Sou um desenvolvedor fullstack, gosto de usar
          Typescript no frontend e no backend.
        </p>
      </Container>
      <Picture>
        <img src={"/img/me.jpeg"} alt="Picture of José Anselmo" />
        <Ring></Ring>
        <Ring></Ring>
        <Ring></Ring>
      </Picture>
    </Section>
  );
}
