import React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Favorite } from "@mui/icons-material";

const MUITabs: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "400px" }}>
          <TabList
            onChange={handleChange}
            aria-label="Tabs Example"
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tab One" value="1" icon={<Favorite />} iconPosition="start" />
            <Tab label="Tab Two" value="2" disabled />
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab label="Tab Six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel 1</TabPanel>
        <TabPanel value="2">Panel 2</TabPanel>
        <TabPanel value="3">Panel 3</TabPanel>
        <TabPanel value="4">Panel 3</TabPanel>
        <TabPanel value="5">Panel 3</TabPanel>
        <TabPanel value="6">Panel 3</TabPanel>
      </TabContext>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="Tabs Example"
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab label="Tab One" value="1" icon={<Favorite />} iconPosition="start" />
            <Tab label="Tab Two" value="2" disabled />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel 1</TabPanel>
        <TabPanel value="2">Panel 2</TabPanel>
        <TabPanel value="3">Panel 3</TabPanel>
      </TabContext>
    </>
  );
};

export default MUITabs;
