import { ListItemText } from "@mui/material";
import { AppBarContainer, AppbarHeader, MyList } from "../../styles/appbar";

export default function AppbarDesktop({ matches }) {
  return (
    <AppBarContainer>
      <AppbarHeader>oerd bej</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact" />
      </MyList>
    </AppBarContainer>
  );
}
