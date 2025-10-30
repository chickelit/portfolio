import { Box, Typography, useTheme } from "@mui/material";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Socials } from "./Socials";

export function Presentation() {
  const theme = useTheme();

  return (
    <ResponsiveContainer
      id="sobre-mim"
      className="grid md:grid-flow-col md:auto-cols-max md:justify-between md:gap-2 justify-items-center gap-8 auto-cols-fr items-center justify-between"
    >
      <Box className="w-full md:max-w-md grid gap-3">
        <Typography variant="h4" fontWeight={600}>
          José Anselmo
        </Typography>
        <Typography color="textSecondary">
          Desenvolvedor Full-Stack com foco em backend e experiência em frontend. Formando no Curso Técnico em Informática pelo IFPE Campus
          Garanhuns, planejo cursar Análise e Desenvolvimento de Sistemas no próximo ano.
        </Typography>
        <Socials />
      </Box>
      <Box>
        <img
          src="/img/me.jpeg"
          alt=""
          className="w-72"
          style={{
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: "morph 8s ease-in-out infinite",
            boxShadow: `3px 3px 12px 0 ${theme.palette.primary.main}`,
          }}
        />
      </Box>
    </ResponsiveContainer>
  );
}
