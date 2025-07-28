import React from "react";
import { Box } from "@mui/material";

const MUIResponsive = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: 100, // 0
            sm: 200, // 600
            md: 300, // 900
            lg: 400, // 1200
            xl: 500, // 1536
          },
          height: 300,
          bgcolor: "primary.main",
          color: "white",
        }}
      ></Box>
    </>
  );
};

export default MUIResponsive;
