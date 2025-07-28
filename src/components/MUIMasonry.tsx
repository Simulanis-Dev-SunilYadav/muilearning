import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";

const MUIMasonry: React.FC = () => {
  const height = ["100px", "150px", "200px", "250px", "300px", "350px", "400px", "450px"];
  return (
    <div>
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry
          columns={3}
          spacing={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {height.map((h, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "primary.main",
                height: h,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              Item {index + 1}
              <Accordion sx={{ width: "100%", mt: 2 }} elevation={0}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h5">Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Content here
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};

export default MUIMasonry;
