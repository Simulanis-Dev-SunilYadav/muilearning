import React, { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const MUIDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} variant="persistent">
        <Box p={2} width={250} textAlign={`center`} role="presentation">
          <Typography variant="h6" component={`div`}>
            Side panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MUIDrawer;
