import React, { useState } from "react";
import { Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { DRAWER_WIDTH } from "../constants/layout";
import { RoutesList } from "../routes";

interface MainLayoutProps {
  showHeader?: boolean;
  showSidebar?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ showHeader = true, showSidebar = true }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <CssBaseline />
      {showHeader && (
        <>
          <Header showSidebar={showSidebar && sidebarOpen} onToggleSidebar={toggleSidebar} />
          <Toolbar />
        </>
      )}
      <Box sx={{ display: "flex" }}>
        {showSidebar && sidebarOpen && (
          <Drawer
            variant="persistent"
            open={sidebarOpen}
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: DRAWER_WIDTH },
            }}
          >
            <Sidebar />
          </Drawer>
        )}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 4,
            ml: showSidebar && sidebarOpen ? `${DRAWER_WIDTH}px` : 0,
            transition: "margin 0.3s",
          }}
        >
          <RoutesList />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
