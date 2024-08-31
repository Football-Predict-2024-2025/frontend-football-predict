import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { SideBar } from "./components/layout/sideBar";
import { HomePage } from "./pages";

function App() {

  return (
    <SideBar>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </SideBar>
  );
}

export default App;
