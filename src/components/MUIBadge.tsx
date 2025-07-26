import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const MUIBadge = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Badge badgeContent={7} color="primary">
          <Mail />
        </Badge>
        <Badge badgeContent={1} color="secondary">
          <Mail />
        </Badge>
        <Badge badgeContent={1000} color="secondary">
          <Mail />
        </Badge>
        <Badge badgeContent={0} color="secondary">
          <Mail />
        </Badge>
        <Badge badgeContent={0} color="secondary" showZero>
          <Mail />
        </Badge>
        <Badge variant="dot" color="secondary" showZero>
          <Mail />
        </Badge>
      </Stack>
    </>
  );
};

export default MUIBadge;
