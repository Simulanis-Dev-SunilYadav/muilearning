import React, { useState } from "react";
import { Avatar, Chip, IconButton, Stack, Tooltip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { Delete } from "@mui/icons-material";
// import Avatar from "@mui/material/Avatar";

const MUIChip = () => {
  const [chips, setChips] = useState(["React", "Vue", "Angular"]);


  const handleDelete = (chipToDelete: any) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip label="Default Chip" onClick={() => alert("Chip clicked!")} size="small" />
        <Chip label="Default Chip" color="secondary" size="medium" variant="outlined" avatar={<Avatar>D</Avatar>} />
        {/* <Chip
          label="Clickable Chip"
          color="error"
          size="medium"
          variant="outlined"
          avatar={<Avatar>D</Avatar>}
          onclick={() => alert("Delete Chip clicked!")}
          onDelete={() => alert("Chip deleted!")}
        /> */}

        <Chip icon={<FaceIcon />} label="With Icon" color="secondary" />
        <br />
        <br />
      </Stack>
      <Stack direction={"row"} spacing={1}>
        {chips.map((chip) => (
          <>
            <Tooltip title={chip} placement="top" arrow enterDelay={500} leaveDelay={200}>
              <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} color="primary" />
            </Tooltip>
          </>
        ))}
      </Stack>
      <br />
      <Tooltip title="Delete" placement="right" arrow enterDelay={100} leaveDelay={200}>
        <IconButton>
          Tooltip <Delete />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default MUIChip;
