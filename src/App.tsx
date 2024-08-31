import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { SideBar } from "./components/layout/sideBar";
import { CreditsPage, HomePage, WinProbabilitasPage } from "./pages";

function App() {
  return (
    <SideBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/win-robabilitas" element={<WinProbabilitasPage />} />
        <Route path="/credits" element={<CreditsPage />} />
      </Routes>
    </SideBar>
  );
}

export default App;
