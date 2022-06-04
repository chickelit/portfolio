import styled from "styled-components";

const Section = styled.section`
  margin: 8rem 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  gap: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const SkillList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const Skill = styled.div`
  width: max-content;
  height: 2rem;
  padding: 0 1rem;
  background: #375c86;
  border-radius: 1rem;
  line-height: 2rem;
  color: #eeeeee;
`;

export function Skills() {
  return (
    <Section id="skills">
      <Title>Habilidades</Title>
      <SkillList>
        <Skill>HTML5</Skill>
        <Skill>CSS3</Skill>
        <Skill>Javascript</Skill>
        <Skill>ES6+</Skill>
        <Skill>Typescript</Skill>
        <Skill>NodeJS</Skill>
        <Skill>Vue</Skill>
        <Skill>Nuxt</Skill>
        <Skill>Vite</Skill>
        <Skill>React</Skill>
        <Skill>SCSS</Skill>
        <Skill>Express</Skill>
        <Skill>Sequelize</Skill>
        <Skill>AdonisJS</Skill>
        <Skill>Japa</Skill>
        <Skill>MySQL</Skill>
        <Skill>Docker</Skill>
      </SkillList>
    </Section>
  );
}
