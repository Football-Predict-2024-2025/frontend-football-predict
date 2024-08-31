import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaGaugeHigh } from "react-icons/fa6";
// import AuthService from "../../services/authService";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import "bootstrap/dist/css/bootstrap.css";

interface SideBarAdminProps {
  children: ReactNode;
}

export const SideBar: React.FC<SideBarAdminProps> = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
        <Sidebar
          backgroundColor="#021526"
          collapsed={collapsed}
          transitionDuration={1000}
          style={{ minHeight: "100vh" }}
          rootStyles={{
            ["." + menuClasses.button]: {
              "&:hover": {
                color: "black",
                backgroundColor: "navy",
              },
            },
          }}
        >
          <Menu>
            <div className="p-3 pb-4 text-center text-light fs-5 fw-bold">
              2024/25 Football Season Prediction
            </div>
            <MenuItem
              onClick={() => navigate("/dasbord")}
              className="text-light"
              icon={<FaGaugeHigh />}
            >
              {" "}
              Team Performances
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/dasbord")}
              className="text-light"
              icon={<FaGaugeHigh />}
            >
              {" "}
              Win Probabilitas
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/dasbord")}
              className="text-light"
              icon={<FaGaugeHigh />}
            >
              {" "}
              Creadit
            </MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ width: "100%" }}>
          <nav className="navbar py-3 pe-4 bg-body-tertiary">
            <div className="container-fluid">
              <div className="navbar-brand">
                <button
                  className="btn"
                  style={{ border: "2px solid #021526" }}
                  onClick={() => setCollapsed(!collapsed)}
                >
                  <FaBars className="fs-4" />
                </button>
              </div>
            </div>
          </nav>
          <div className="p-3">
            <div className="shadow p-4" style={{ minHeight: "80vh" }}>
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
