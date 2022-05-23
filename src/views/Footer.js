import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
          label="Browse Plants"
          icon={<SpaOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Login"
          icon={<PersonOutlineOutlinedIcon />}
        />
        <BottomNavigationAction label="Chat" icon={<ChatOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
