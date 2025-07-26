import React, { useState } from "react";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { BookmarkAdd, BookmarkBorder, BookmarkBorderOutlined } from "@mui/icons-material";

const CheckBoxComp = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
    console.log("Checkbox is now:", event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }

    // const skill = event.target.value;
    // setSkills((prevSkills) =>
    //   prevSkills.includes(skill)
    //     ? prevSkills.filter((s) => s !== skill)
    //     : [...prevSkills, skill]
    // );
    // console.log("Selected skills:", skills);
  };
  console.log("Selected skills:", skills);
  return (
    <>
      <Box>
        <Box>
          <FormControlLabel
            label="I accept terms and conditions"
            control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
          />
        </Box>
        <Box>
          <Checkbox
            icon={<BookmarkBorderOutlined />}
            checkedIcon={<BookmarkAdd />}
            checked={acceptTnc}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormControl>
            <FormLabel error>Skills</FormLabel>
            <FormGroup row>
              <FormControlLabel label="HTML" value={"HTML"} control={<Checkbox checked={skills.includes('HTML')} onChange={handleSkillChange} />} />
              <FormControlLabel label="CSS" value={"CSS"} control={<Checkbox checked={skills.includes('CSS')} onChange={handleSkillChange} />} />
              <FormControlLabel label="JavaScript" value={"JavaScript"} control={<Checkbox checked={skills.includes('JavaScript')} onChange={handleSkillChange} />} />
            </FormGroup>
          </FormControl>
        </Box>

        
      </Box>
    </>
  );
};

export default CheckBoxComp;
