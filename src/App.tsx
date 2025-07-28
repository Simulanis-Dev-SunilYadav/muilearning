import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Box, CssBaseline, Drawer, Toolbar, AppBar, Typography } from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { RoutesList } from "./routes";
import SidebarHeader from "./common/Sidebar";
import Header from "./common/Header";
import MainLayout from "./common/MainLayout";

const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout showHeader={true} showSidebar={true} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
