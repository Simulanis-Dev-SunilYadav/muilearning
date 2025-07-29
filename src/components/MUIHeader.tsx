import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";

const MUIHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Pricing</Button>
        <Button color="inherit">About</Button>
        <Button
          color="inherit"
          id="resources-button"
          onClick={handleClick}
          aria-controls={open ? "responsive-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          endIcon={<KeyboardArrowDown />}
        >
          Resources
        </Button>
        <Button color="inherit">Login</Button>
      </Stack>
      <Menu
        id="responsive-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "resources-button",
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Podcast</MenuItem>
      </Menu>
    </>
  );
};

export default MUIHeader;
