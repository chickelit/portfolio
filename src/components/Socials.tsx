import { Box, useTheme } from "@mui/material";
import { socialMedia } from "Src/variables/social-media";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export function Socials() {
  return (
    <Box className="w-max h-max grid grid-flow-col gap-2">
      <Box className="grid">
        <Link to={socialMedia.instagram} target="_blank">
          <InstagramIcon fontSize="large" />
        </Link>
      </Box>
      <Box className="grid">
        <Link to={socialMedia.github} target="_blank">
          <GitHubIcon fontSize="large" />
        </Link>
      </Box>
      <Box className="grid">
        <Link to={socialMedia.linkedin} target="_blank">
          <LinkedInIcon fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
}
