import styled from "styled-components";

const Nav = styled.nav`
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: end;
`;

const NavItems = styled.ul`
  width: max-content;
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    width: max-content;
    display: grid;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
    gap: 0.5rem;
  }
`;

const NavItem = styled.li`
  a {
    color: #eeeeee;
    text-decoration: none;
    font-size: 2rem;
    transition: all 0.15s linear;
    &:hover {
      color: #dbdbdb;
    }
  }
`;

export function Navigation() {
  return (
    <Nav>
      <NavItems>
        <NavItem>
          <a href="#about-me">Sobre mim</a>
        </NavItem>
        <NavItem>
          <a href="#projects">Projetos</a>
        </NavItem>
        <NavItem>
          <a href="#skills">Habilidades</a>
        </NavItem>
        <NavItem>
          <a href="#contact">Contato</a>
        </NavItem>
      </NavItems>
    </Nav>
  );
}
