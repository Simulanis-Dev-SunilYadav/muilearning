import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { CopyAll, PlusOneOutlined, PrintOutlined, ShareOutlined } from "@mui/icons-material";

const MUISpeedDial = () => {
  return (
    <>
      <SpeedDial
        ariaLabel="Navigation Speed Dial"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<PrintOutlined />} tooltipTitle="Print" />
        <SpeedDialAction icon={<ShareOutlined />} tooltipTitle="Share" />
      </SpeedDial>
    </>
  );
};

export default MUISpeedDial;
