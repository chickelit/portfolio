import styled from "styled-components";

const StyledSocials = styled.div`
  width: max-content;
  height: max-content;
  display: grid;
`;

const Social = styled.a`
  display: grid;
  width: 3rem;
  img {
    width: 100%;
  }
`;

export function Socials() {
  return (
    <StyledSocials>
      <Social href="https://instagram.com/tete5275" target="_blank">
        <img src={"/svg/instagram.svg"} alt="Instagram icon" />
      </Social>
      <Social href="https://github.com/jose13162" target="_blank">
        <img src={"/svg/github.svg"} alt="Github icon" />
      </Social>
      <Social href="https://linkedin.com/in/jose13162" target="_blank">
        <img src={"/svg/linkedin.svg"} alt="Linkedin icon" />
      </Social>
    </StyledSocials>
  );
}
