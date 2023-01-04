import { HTMLAttributes, HTMLProps } from "react";
import styled from "styled-components";
import { Socials } from "./Socials";

const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const Container = styled.div`
  color: #eeeeee;
  display: grid;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 2rem;
  }

  p {
    font-weight: 300;
    font-size: 1.125rem;
  }

  a {
    line-height: 2.5rem;
    height: 2.5rem;
    width: 9rem;
    border-radius: 1.25rem;
    background: #375c86;
    color: #eeeeee;
    font-weight: 300;
    font-size: 1.125rem;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.15s linear;
    &:hover {
      background: #3e6897;
    }
  }

  @media (max-width: 648px) {
    h1 {
      font-size: 2.25rem;
      line-height: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    a {
      line-height: 2rem;
      height: 2rem;
      width: 7.5rem;
      border-radius: 1rem;
      font-size: 1rem;
    }
  }
`;

export function Presentation(props: HTMLAttributes<HTMLBaseElement>) {
  return (
    <Section {...props}>
      <Container>
        <h1>José Anselmo</h1>
        <p>Desenvolvedor fullstack</p>
        <a href="#about-me">Sobre mim</a>
      </Container>
      <Socials />
    </Section>
  );
}
