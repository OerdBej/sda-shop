import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppBarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SeearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  return (
    <AppBarContainer>
      <AppbarHeader>oerd bej</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact" />
        <ListItemButton>
          <ListItemIcon>
            <SeearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions />
    </AppBarContainer>
  );
}
