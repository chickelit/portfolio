import styled from "styled-components";

const Footer = styled.footer`
  background: #18181e;
  color: #eeeeee;
  height: 8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  align-content: center;
  justify-items: center;
  gap: 1rem;
`;

export function Contact() {
  return (
    <Footer id="contact">
      <h2>Contato</h2>
      <p>anselmojose297@gmail.com</p>
    </Footer>
  );
}
