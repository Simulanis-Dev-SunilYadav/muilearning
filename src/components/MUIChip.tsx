import { Avatar, Chip, Stack } from "@mui/material";
import React from "react";

const MUIChip = () => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip label="Default Chip" onClick={() => alert("Chip clicked!")} size="small" />
        <Chip
          label="Default Chip"
          color="secondary"
          size="medium"
          variant="outlined"
          avatar={<Avatar>D</Avatar>}
        />
        <Chip
          label="Clickable Chip"
          color="error"
          size="medium"
          variant="outlined"
          avatar={<Avatar>D</Avatar>}
          onclick={() => alert("Delete Chip clicked!")}
          onDelete={() => alert("Chip deleted!")}
        />

      </Stack>
    </>
  );
};

export default MUIChip;
