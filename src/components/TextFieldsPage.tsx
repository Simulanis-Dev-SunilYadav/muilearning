import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CheckBoxComp from "./CheckBox";
import MuISwitch from "./MuISwitch";
import MUIRating from "./MUIRating";
import MUIAutocomplete from "./MUIAutocomplete";
import MUILayout from "./MUILayout";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };
  console.log(value);
  return (
    <>
      <Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value ? "Required" : ""}
          />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <br />
        <Stack direction="row" spacing={2}>
          <TextField label="Small secondary" size="small" color="secondary" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField label="Form Input" color="secondary" />
          <TextField label="Password" type="password" helperText="Do not share your password with anyone" />
          <TextField label="Disabled" disabled />
          <TextField label="Read only" InputProps={{ readOnly: true }} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>

      <br />
      <Stack>
        <Typography variant="h4">Select</Typography>
        <Box width="250px">
          <TextField
            select
            label="Select a Country"
            value={country}
            onChange={handleChange}
            fullWidth
            // size="small"
            // color="secondary"
            // helperText="Please select your country"
            // error
            SelectProps={{
              multiple: true,
            }}
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">United States</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
          </TextField>
        </Box>

        {/* <Select label="Select a Country" value={value} onChange={(e) => setValue(e.target.value)}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                </Select> */}
      </Stack>

      <Stack>
        <Typography variant="h4">Radio Button</Typography>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleExperienceChange}
            row
          >
            <FormControlLabel control={<Radio size="medium" color="secondary" />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
            <FormControlLabel control={<Radio />} label="10+" value="10+" />
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Stack>

      <CheckBoxComp />

      <MuISwitch />

      <MUIRating/>

      <br /><br />
      <MUIAutocomplete/>

      <br />
      {/* <MUILayout/> */}
    </>
  );
};

export default MuiTextField;
