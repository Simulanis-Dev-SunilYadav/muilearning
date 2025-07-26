import React from "react";
import { Avatar, Stack, AvatarGroup } from "@mui/material";

const MUIAvatar = () => {
  return (
    <>
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={1}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </Stack>

        <Stack>
          <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
            <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MUIAvatar;
