import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";

//  bringing the hooks from themes () 🔥🤔
export default function Appbar() {
  const theme = useTheme();

  // 🤔 conditional for the media queries mobile. If true on mobile || desktop
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <AppbarMobile /> : <AppbarDesktop />}</>;
}
