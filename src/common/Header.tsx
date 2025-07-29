import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DRAWER_WIDTH } from "../constants/layout";
import MUIHeader from "../components/MUIHeader";

interface HeaderProps {
  showSidebar: boolean;
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ showSidebar, onToggleSidebar, sidebarOpen }) => {
  const isSidebarVisible = showSidebar && sidebarOpen;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isSidebarVisible ? `calc(100% - ${DRAWER_WIDTH}px)` : "100%",
        ml: isSidebarVisible ? `${DRAWER_WIDTH}px` : 0,
        transition: "width 0.3s, margin 0.3s",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={2} alignItems="center">
          {showSidebar && (
            <IconButton color="inherit" edge="start" onClick={onToggleSidebar} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            MUI Sidebar App
          </Typography>
        </Stack>
        <MUIHeader />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
