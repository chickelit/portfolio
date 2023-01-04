import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: end;
`;

const NavItem = styled.li`
  height: 2.25rem;
  a {
    height: 100%;
    padding: 0 1rem;
    color: #eeeeee;
    text-decoration: none;
    font-size: 1rem;
    display: grid;
    place-content: center;
    transition: all 0.15s linear;
    &:hover {
      color: #dbdbdb;
    }

		border-radius: 0.25rem;
		border: 1px solid #3b3951;
  }

  &.highlighted {
    a {
      background: #3b3951;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
    }
  }
`;

const NavItems = styled.ul`
  width: max-content;
  height: max-content;
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    ${NavItem} {
      a {
        justify-content: start;
      }
    }

    justify-items: end;
    grid-auto-flow: row;
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
        <NavItem className="highlighted">
          <a href="#contact">Contato</a>
        </NavItem>
      </NavItems>
    </Nav>
  );
}
