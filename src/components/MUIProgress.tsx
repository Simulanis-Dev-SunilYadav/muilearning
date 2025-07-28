import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

const MUIProgress = () => {
  return (
    <>
      <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color="success" value={90} />
        <LinearProgress color="success" />
      </Stack>
    </>
  );
};

export default MUIProgress;
