import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, AppBar, Typography } from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { navItems } from "./navItems";

const SidebarHeader = () => (
  <>
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6" noWrap component="div">
        MUI Sidebar App
      </Typography>
    </Box>
    <Box sx={{ overflow: "auto" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </>
);

export default SidebarHeader; 