import { FavoriteRounded, HomeFilled, HomeRepairServiceOutlined, LocationCity, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

const MUIBottomNavigation = () => {
  return <>
  <BottomNavigation>
    <BottomNavigationAction label="Home" icon={<HomeFilled />} />
    <BottomNavigationAction label="Favorites" icon={<FavoriteRounded />} />
    <BottomNavigationAction label="Nearby" icon={<LocationCity />} />
    <BottomNavigationAction label="Profile" icon={<Person />} />
  </BottomNavigation>
  </>;
};

export default MUIBottomNavigation;
