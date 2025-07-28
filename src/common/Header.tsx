import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { DRAWER_WIDTH } from "../constants/layout";

interface HeaderProps {
  showSidebar?: boolean;
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  showSidebar = true,
  onToggleSidebar,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: showSidebar ? `calc(100% - ${DRAWER_WIDTH}px)` : "100%",
        ml: showSidebar ? `${DRAWER_WIDTH}px` : 0,
        transition: "width 0.3s, margin 0.3s",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onToggleSidebar}
          sx={{ mr: 2, display: { sm: "block" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          MUI Sidebar App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
