import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  Link,
  Box,
  Breadcrumbs,
} from "@mui/material";
import { CatchingPokemon, KeyboardArrowDown, NavigateNext } from "@mui/icons-material";
import MUIDrawer from "./MUIDrawer";
import MUISpeedDial from "./MUISpeedDial";
import MUIBottomNavigation from "./MUIBottomNavigation";
import MUIAvatar from "./MUIAvatar";
import MUIBadge from "./MUIBadge";
// import { Link } from "react-router-dom";

const MUINavbar = () => {
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
      <Typography>Navbar</Typography>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PokemonApp
          </Typography>
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
          {/* Menu */}
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
        </Toolbar>
      </AppBar>

      <Stack spacing={2} sx={{ mt: 2 }} direction={"row"}>
        <Link href="#">Link </Link>
        <Link href="#" color="secondary" underline="none">
          Link{" "}
        </Link>
      </Stack>

      <Typography variant="h2">Breadcrumb</Typography>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNext fontSize="small" />}
          maxItems={3}
          itemsBeforeCollapse={2}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Assessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>

      {/* <MUIDrawer /> */}

      <MUISpeedDial />

      <MUIAvatar />
      <br />
      <br />
      <MUIBadge />

      <MUIBottomNavigation />
    </>
  );
};

export default MUINavbar;
