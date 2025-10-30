import { Box, useTheme } from "@mui/material";
import { Navigation } from "./Navigation";
import { Presentation } from "./Presentation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function Hero() {
  const theme = useTheme();

  return (
    <Box className="relative h-screen grid grid-rows-[max-content_1fr] place-items-center">
      <Navigation />
      <Box className="absolute w-full top-1/2 -translate-y-1/2 grid place-items-center">
        <Presentation />
      </Box>
      <Box className="absolute bottom-4">
        <ExpandMoreIcon fontSize="large" sx={{ color: theme.palette.text.secondary }} />
      </Box>
    </Box>
  );
}
