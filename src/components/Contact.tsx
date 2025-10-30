import { Link } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import { EMAIL } from "Src/variables";

export function Contact() {
  return (
    <Paper
      id="contato"
      component="footer"
      className="w-screen h-32 grid grid-cols-1 auto-rows-max content-center justify-items-center gap-4"
    >
      <Typography component="h2" variant="h5">
        Contato
      </Typography>
      <Link to={`mailto:${EMAIL}`}>
        <Typography color="textSecondary" className="hover:underline">
          {EMAIL}
        </Typography>
      </Link>
    </Paper>
  );
}
