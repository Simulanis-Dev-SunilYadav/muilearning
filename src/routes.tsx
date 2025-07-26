import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import TypographyPage from "./components/TypographyPage";
import ButtonsPage from "./components/ButtonsPage";
import TextFieldsPage from "./components/TextFieldsPage";
import MUILayout from "./components/MUILayout";
import MUICard from "./components/MUICard";
import MUIAccordion from "./components/MUIAccordion";
import MUINavbar from "./components/MUINavbar";
import MUIList from "./components/MUIList";
import MUIChip from "./components/MUIChip";

function Home() {
  return <Typography variant="h4">Home Page</Typography>;
}
// function TypographyPage() {
//   return <Typography variant="h4">Typography Page</Typography>;
// }
// function ButtonsPage() {
//   return <Typography variant="h4">Buttons Page</Typography>;
// }

export function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/typography" element={<TypographyPage />} />
      <Route path="/buttons" element={<ButtonsPage />} />
      <Route path="/textfields" element={<TextFieldsPage/>} />
      <Route path="/layout" element={<MUILayout/>} />
      <Route path="/card" element={<MUICard/>} />
      <Route path="/accordion" element={<MUIAccordion/>} />
      <Route path="/navitems" element={<MUINavbar/>} />
      <Route path="/list" element={<MUIList/>} />
      <Route path="/chip" element={<MUIChip/>} />
    </Routes>
  );
}

export { Home, TypographyPage, ButtonsPage }; 