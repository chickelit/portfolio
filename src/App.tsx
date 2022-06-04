import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import styled from "styled-components";

const PrimaryContainer = styled.header`
  width: 100vw;
  height: 100vh;
  background: #18181e;
  position: relative;
`;

function App() {
  return (
    <div className="app">
      <PrimaryContainer>
        <Navigation />
        <Presentation />
      </PrimaryContainer>
      <section>
        <AboutMe />
        <Projects />
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
