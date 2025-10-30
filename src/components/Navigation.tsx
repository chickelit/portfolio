import { Box, Button } from "@mui/material";
import { ResponsiveContainer } from "./ResponsiveContainer";

type NavigationLinkProps = {
  to: string;
  text: string;
};

export function NavigationLink(props: NavigationLinkProps) {
  return (
    <a href={props.to} style={{ width: "100%", height: "100%" }}>
      <Button
        color="primary"
        className="w-max"
        variant="outlined"
        sx={{
          textTransform: "none",
        }}
      >
        {props.text}
      </Button>
    </a>
  );
}

export function Navigation() {
  return (
    <Box component="nav" className="w-screen py-4 grid place-items-center">
      <ResponsiveContainer component="ul" className="flex flex-wrap gap-2">
        <li className="inline-block">
          <NavigationLink text="Projetos" to="#projetos" />
        </li>
        <li className="inline-block">
          <NavigationLink text="Habilidades" to="#habilidades" />
        </li>
        <li className="inline-block">
          <NavigationLink text="Contato" to="#contato" />
        </li>
      </ResponsiveContainer>
    </Box>
  );
}
