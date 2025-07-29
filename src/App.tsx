import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
