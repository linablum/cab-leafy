import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";
import {
  HomeOutlined,
  PersonOutlineOutlined,
  SpaOutlined,
  ChatOutlined,
  AccountBoxOutlined,
} from "@mui/icons-material";

export default function Footer() {
  const [value, setValue] = useState(null);
  const { user } = useContext(AuthContext);

  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`

  &.Mui-selected {
    color: seagreen;
  }
`);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ bgcolor: "lightgreen" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeOutlined />}
        />
        <BottomNavigationAction
          component={Link}
          to="/details"
          label="Browse Plants"
          icon={<SpaOutlined />}
        />
        {user ? (
          <BottomNavigationAction
            component={Link}
            to="/chat"
            label="Chat"
            icon={<ChatOutlined />}
          />
        ) : (
          <p></p>
        )}
        {user ? (
          <BottomNavigationAction
            component={Link}
            to="/userprofile"
            label="Profile"
            icon={<AccountBoxOutlined />}
          />
        ) : (
          <p></p>
        )}
        {user ? (
          <BottomNavigationAction
            component={Link}
            to="/logout"
            label="Logout"
            icon={<PersonOutlineOutlined />}
          />
        ) : (
          <BottomNavigationAction
            component={Link}
            to="/login"
            label="Login"
            icon={<PersonOutlineOutlined />}
          />
        )}
      </BottomNavigation>
    </Box>
  );
}
