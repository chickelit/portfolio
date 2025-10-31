import { ResponsiveContainer } from "./ResponsiveContainer";
import { Box, Typography, useTheme } from "@mui/material";

interface SkillProps {
  text: string;
}

export function Skill(props: SkillProps) {
  const theme = useTheme();

  return (
    <Box className="inline-block p-1.5">
      <Box
        className="relative w-max h-10 px-4 grid place-items-center rounded-[20px]"
        sx={{
          border: `2px solid ${theme.palette.primary.main}`,
          "&::after": {
            margin: "3px",
            borderRadius: "inherit",
            zIndex: -1,
            content: '""',
            position: "absolute",
            inset: 0,
            bgcolor: "primary.main",
            opacity: 0.3,
          },
        }}
      >
        <Typography fontWeight={500}>{props.text}</Typography>
      </Box>
    </Box>
  );
}

export function Skills() {
  return (
    <Box component="section" id="habilidades">
      <Box className="grid grid-rows-[max-content_1fr] gap-12 place-items-center">
        <Box sx={{ bgcolor: "primary.main" }} className="h-36 w-screen grid place-items-center">
          <Typography component="h2" variant="h4">
            Habilidades
          </Typography>
        </Box>
        <ResponsiveContainer className="max-w-xl">
          <Box className="w-full wrap-break-word text-center">
            <Skill text="HTML5" />
            <Skill text="CSS3" />
            <Skill text="Javascript" />
            <Skill text="ES6+" />
            <Skill text="Git" />

            <Skill text="Typescript" />
            <Skill text="NodeJS" />

            <Skill text="Vite" />
            <Skill text="React" />
            <Skill text="Tailwind" />

            <Skill text="Express" />
            <Skill text="MySQL" />
            <Skill text="PostgreSQL" />
            <Skill text="Websocket" />

            <Skill text="Jest" />

            <Skill text="Postman" />
            <Skill text="Docker" />
            <Skill text="Github Actions" />
            <Skill text="Hostinger" />
            <Skill text="VPS" />
            <Skill text="Openlitespeed" />
          </Box>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
