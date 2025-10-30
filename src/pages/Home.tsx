import { Contact } from "Src/components/Contact";
import { Projects } from "Src/components/Projects";
import { Skills } from "Src/components/Skills";
import { Box } from "@mui/material";
import { Hero } from "Src/components/Hero";

export function Home() {
  return (
    <Box className="overflow-x-hidden">
      <Hero />
      <Box className="grid gap-24 place-items-center">
        <Projects />
        <Skills />
        <Contact />
      </Box>
    </Box>
  );
}
