import React from "react";
import { Box, Divider, Grid, Stack, Typography, Paper } from "@mui/material";

const MUILayout = () => {
  return (
    <>
      <Paper sx={{ padding: '20px' }}>
        <Stack
          sx={{ border: "1px solid #444", padding: 2, borderRadius: 1 }}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box
            //   component={"section"}
            sx={{
              bgcolor: "primary.light",
              color: "white",
              height: "100px",
              width: "100px",
              padding: 2,
              borderRadius: 1,
              textAlign: "center",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            MUI Layout Example
          </Box>

          <Box sx={{
            bgcolor: "primary.light",
            color: "white",
            height: "100px",
            width: "100px",
            padding: 2,
            borderRadius: 1,
            textAlign: "center",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
            "&:hover": { bgcolor: "primary.dark" },
          }}>dfgrh</Box>
        </Stack>

        <Grid container my={4}>
          <Grid sx={{ width: { xs: '100%', sm: '50%' } }}>
            <Box bgcolor="primary.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid sx={{ width: { xs: '100%', sm: '25%' } }}>
            <Box bgcolor="primary.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid sx={{ width: { xs: '100%', sm: '25%' } }}>
            <Box bgcolor="primary.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid sx={{ width: { xs: '100%', sm: '100%' } }}>
            <Box bgcolor="primary.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MUILayout;
