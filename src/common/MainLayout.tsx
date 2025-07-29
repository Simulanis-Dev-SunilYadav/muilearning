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

      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        {showSidebar && sidebarOpen && (
          <Drawer
            variant="persistent"
            open
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
              },
            }}
          >
            <Sidebar />
          </Drawer>
        )}

        {/* Main Area */}
        <Box>
          {/* Header */}
          {showHeader && (
            <>
              <Header showSidebar={showSidebar} onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
              <Toolbar />
            </>
          )}
          {/* Page Content */}
          <Box
            component="main"
            sx={{
              p: 3,
              transition: "margin 0.3s",
            }}
          >
            <RoutesList />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
