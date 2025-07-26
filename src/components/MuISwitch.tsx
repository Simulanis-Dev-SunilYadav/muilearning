import React, {useState} from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuISwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log("Switch is now:", event.target.checked);
  };
  return (
    <>
      <Box>
        <FormControlLabel label="Dark Mode" control={<Switch checked={checked} onChange={handleChange} color="success"/>} />
      </Box>
    </>
  );
};

export default MuISwitch;
