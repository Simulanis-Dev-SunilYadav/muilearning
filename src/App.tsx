import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Box, CssBaseline, Drawer, Toolbar, AppBar, Typography } from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { RoutesList } from "./routes";
import SidebarHeader from "./SidebarHeader";

const drawerWidth = 240;

const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar>
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                MUI Sidebar App
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
            }}
          >
            <SidebarHeader />

          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 4 }}>
            <Toolbar />
            <RoutesList />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
