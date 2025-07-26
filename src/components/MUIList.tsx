import { Mail } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const MUIList = () => {
  return (
    <>
      <Box sx={{ width: 300, bgcolor: "#efefef" }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List Item 1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 2" secondary="Secondary text" />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="List Item 3" secondary="Secondary text" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default MUIList;
