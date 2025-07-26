import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MUIAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98b",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Mushrooms",
    },
  ];

  return (
    <>
      <Accordion expanded={expanded === "panel1"} onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo officia magnam doloremque dolore vero
          fugit nam magni. Repellat a consequatur autem totam maiores eos et, libero quam cum delectus placeat.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}>
        <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMore />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo officia magnam doloremque dolore vero
          fugit nam magni. Repellat a consequatur autem totam maiores eos et, libero quam cum delectus placeat.
        </AccordionDetails>
      </Accordion>

      <br />
      <br />
      <Typography variant="h2">Image </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <ImageList variant="standard" sx={{ width: 800, height: 400 }} cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=264&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=264&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <ImageListItemBar title={item.title}/>
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </>
  );
};

export default MUIAccordion;
