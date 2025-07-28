import React, { useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";

const MUILoadingButtonsff = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Stack spacing={2} sx={{ m: 2 }}>
      <LoadingButton variant="outlined" loading={loading} onClick={handleClick}>
        Submit
      </LoadingButton>

      <LoadingButton loading={loading} variant="contained" onClick={handleClick} loadingIndicator="Loading…">
        Submit
      </LoadingButton>

      <LoadingButton
        loading={loading}
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
        onClick={handleClick}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MUILoadingButtonsff;
