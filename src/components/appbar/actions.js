import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  MyList,
  ActoniconsContainerMobile,
  ActoniconsContainerDesktop,
} from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Actions({ matches }) {
  // here making the responsivines CSS into the styles components

  const Component = matches ? ActoniconsContainerMobile : ActoniconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        {/* creating a divider in order to make it */}
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}
