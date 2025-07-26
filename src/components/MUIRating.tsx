import React from "react";
import { Box, Rating, Stack } from "@mui/material";
import { FavoriteBorder, FavoriteBorderOutlined, FavoriteBorderRounded } from "@mui/icons-material";

const MUIRating = () => {
  const [value, setValue] = React.useState<number | null>(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<FavoriteBorder fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderOutlined fontSize="inherit" color="disabled" />}
          highlightSelectedOnly
        //   readOnly
        />
      </Stack>
    </>
  );
};

export default MUIRating;
