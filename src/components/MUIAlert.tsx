import React from "react";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

const MUIAlert = () => {
  return (
    <>
      <Stack spacing={2}>
        <Alert severity="error">This is error</Alert>
        <Alert severity="warning">This is warning</Alert>
        <Alert severity="info">This is info</Alert>
        <Alert severity="success">This is success</Alert>
      </Stack>
      <br />
      <Stack spacing={2}>
        <Alert severity="error" variant="standard">
          This is error
        </Alert>
        <Alert severity="warning" variant="outlined">
          This is warning
        </Alert>
        <Alert severity="info" variant="filled">
          This is info
        </Alert>
        <Alert
          severity="success"
          variant="filled"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          This is success
        </Alert>
        <Alert severity="error" variant="filled" onClose={() => alert("Are you want to remove this ")}>
          <AlertTitle>Error</AlertTitle>
          This is error
        </Alert>
      </Stack>
    </>
  );
};

export default MUIAlert;
