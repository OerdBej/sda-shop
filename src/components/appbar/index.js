import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// bringing the hooks from themes 🔥
export default function Appbar() {
  const theme = useTheme();

  // conditional for the media queries mobile
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <h1>Mobile</h1> : <h1>Desktop</h1>}</>;
}
