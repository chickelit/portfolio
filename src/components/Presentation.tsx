import styled from "styled-components";

const Section = styled.section`
  height: max-content;
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  color: #eeeeee;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const Container = styled.div`
  margin-left: 2.5rem;
  display: grid;
  gap: 0.5rem;

  h1 {
    font-size: 5rem;
  }

  p {
    font-weight: 300;
    font-size: 1.25rem;
  }
  
  a {
    line-height: 2.75rem;
    height: 2.75rem;
    width: 10rem;
    margin-top: 0.5rem;
    border-radius: 1.375rem;
    background: #375c86;
    color: #eeeeee;
    font-weight: 300;
    font-size: 1.25rem;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.15s linear;
    &:hover {
      background: #3e6897;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }

    p,
    a {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.75rem;
    }

    a {
      line-height: 2.2rem;
      height: 2.2rem;
      width: 8rem;
    }

    p,
    a {
      font-size: 1rem;
    }
  }
`;

const Socials = styled.div`
  width: max-content;
  height: max-content;
  display: grid;
`;

const Social = styled.a`
  display: grid;
`;

export function Presentation() {
  return (
    <Section>
      <Container>
        <h1>José Anselmo</h1>
        <p>Desenvolvedor fullstack</p>
        <a href="#about-me">Sobre mim</a>
      </Container>
      <Socials>
        <Social href="https://instagram.com/zezin_627" target="_blank">
          <img src={"/svg/instagram.svg"} alt="Instagram icon" />
        </Social>
        <Social href="https://github.com/jose13162" target="_blank">
          <img src={"/svg/github.svg"} alt="Github icon" />
        </Social>
      </Socials>
    </Section>
  );
}
