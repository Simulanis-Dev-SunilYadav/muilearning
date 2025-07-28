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
import MUITable from "./components/MUITable";
import MUIAlert from "./components/MUIAlert";
import MUISnackbar from "./components/MUISnackbar";
import MUIDialog from "./components/MUIDialog";
import MUIProgress from "./components/MUIProgress";
import MUISkelton from "./components/MUISkelton";
import MUILoadinButtons from "./components/MUILoadinButtons";
import MUIDateTimeRangePicker from "./components/MUIDateTimeRangePicker";
import MUITabs from "./components/MUITabs";
import MUITimeline from "./components/MUITimeline";
import MUIMasonry from "./components/MUIMasonry";
import MUIResponsive from "./components/MUIResponsive";
import MUIThemeCustomization from "./components/MUIThemeCustomization";

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
      <Route path="/textfields" element={<TextFieldsPage />} />
      <Route path="/layout" element={<MUILayout />} />
      <Route path="/card" element={<MUICard />} />
      <Route path="/accordion" element={<MUIAccordion />} />
      <Route path="/navitems" element={<MUINavbar />} />
      <Route path="/list" element={<MUIList />} />
      <Route path="/chip" element={<MUIChip />} />
      <Route path="/table" element={<MUITable />} />
      <Route path="/alerts" element={<MUIAlert />} />
      <Route path="/snackbar" element={<MUISnackbar />} />
      <Route path="/dialog" element={<MUIDialog />} />
      <Route path="/progress" element={<MUIProgress />} />
      <Route path="/skelton" element={<MUISkelton />} />
      <Route path="/loading" element={<MUILoadinButtons />} />
      <Route path="/datetimerange" element={<MUIDateTimeRangePicker />} />
      <Route path="/tabs" element={<MUITabs />} />
      <Route path="/timeline" element={<MUITimeline />} />
      <Route path="/masonry" element={<MUIMasonry />} />
      <Route path="/responsive" element={<MUIResponsive />} />
      <Route path="/themecustomization" element={<MUIThemeCustomization />} />
    </Routes>
  );
}

export { Home, TypographyPage, ButtonsPage };
