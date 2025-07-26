import { Stack, Autocomplete, TextField } from "@mui/material";
import React from "react";

const MUIAutocomplete = () => {
  type Skill = {
      id: number;
      label: string;
  };

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java", "C++", "Ruby", "PHP"];
  const [value, setValue] = React.useState<string | null>(null);
  const [skill, setSkill] = React.useState<Skill | null>(null); 

  console.log(value);

  const skillOptions: Skill[] = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  console.log(skill);

  return (
    <>
      <Stack spacing={2} width={300}>
        <Autocomplete
          options={skills}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Select a skill" variant="outlined" />}
          fullWidth
          freeSolo
        />
        <Autocomplete
          options={skillOptions}
          value={skill}
          onChange={(event, newValue) => {
            setSkill(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Select a skill" variant="outlined" />}
          fullWidth
        />
      </Stack>
    </>
  );
};

export default MUIAutocomplete;
