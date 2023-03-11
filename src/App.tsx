import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Home from "./routes/Home";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      {/* <Header /> */}
      <div style={{ padding: 10 }} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}
