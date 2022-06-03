import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";

// customizing the box component. we can use also div cointeners

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  jutifyContent: "center",
  alignItems: "center",
  padding: "2px, 8px",
}));

// customizing the header. Inheating from typography bcs its a title

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  //   npm i @fontsource/montez 👍
  fontFamily: "Montez",
  //   pre themes component MUI
  color: Colors.secondary,
}));

// costomizing the list, type is parameter. passing to AppbarDesktop 🔥

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));
