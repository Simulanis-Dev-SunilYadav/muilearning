import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Css } from "@mui/icons-material";
import { Box, CssBaseline, Typography } from "@mui/material";
import theme from "../theme";
import MUILayout from "./MUILayout";

const MUIThemeCustomization = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom color="primary">
            MUI Theme Customization
          </Typography>
          <Typography variant="h1" gutterBottom color="secondary">
            This page demonstrates how to customize the Material-UI theme.
          </Typography>
          <Typography variant="body1">This is an example of how to customize the MUI theme.</Typography>
        </Box>
        <MUILayout />
      </ThemeProvider>
    </>
  );
};

export default MUIThemeCustomization;
