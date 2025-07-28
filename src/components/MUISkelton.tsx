import React, { useEffect, useState } from "react";
import { Avatar, Box, Card, CardHeader, CardMedia, Skeleton, Stack, Typography } from "@mui/material";

const MUISkelton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="circular" width={100} height={100} animation="wave" />
        <Skeleton variant="rectangular" width={250} height={125} animation="wave" />
      </Stack>
      <br />
      <br />
      <br />
      <Card sx={{ maxWidth: 345, m: 2 }}>
        {loading ? (
          <>
            <Skeleton variant="rectangular" height={194} />
            <CardHeader
              avatar={<Skeleton variant="circular" width={40} height={40} />}
              title={<Skeleton variant="text" width="80%" />}
              subheader={<Skeleton variant="text" width="40%" />}
            />
          </>
        ) : (
          <>
            <CardMedia
              component="img"
              height="194"
              image="https://picsum.photos/id/1/200/300"
              alt="Card Thumbnail"
            />
            <CardHeader
              avatar={<Avatar alt="User Name" src="https://i.pravatar.cc/150?img=3" />}
              title={<Typography variant="subtitle1">John Doe</Typography>}
              subheader="July 26, 2025"
            />
          </>
        )}
      </Card>
    </>
  );
};

export default MUISkelton;
