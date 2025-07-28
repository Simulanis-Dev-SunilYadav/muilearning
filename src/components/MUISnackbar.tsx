import React, { useState, forwardRef } from "react";
import { Button, Snackbar } from "@mui/material";

const MUISnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="From submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={() => setOpen(false)}
      ></Snackbar>
      <br /> */}
      {/* <Snackbar
        message="From submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
      ></Snackbar> */}

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Form submitted successfully"
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      />
    </>
  );
};

export default MUISnackbar;
