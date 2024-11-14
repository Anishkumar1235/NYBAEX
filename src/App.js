import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InvestorDashboard from "./pages/Investor/Dashboard";
import ContentDashboard from "./pages/Content/Dashboard";
import Projects from "./pages/Content/Projects";
import Ready from "./pages/Content/Ready";
import Profile from "./pages/Content/Profile";
import OTTDashboard from "./pages/OTT/Dashboard";
import AllProjects from "./pages/OTT/AllProjects";
import AllReady from "./pages/OTT/AllReady";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/i-dashboard" element={<InvestorDashboard />} />

          <Route path="/c-dashboard" element={<ContentDashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ready" element={<Ready />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/o-dashboard" element={<OTTDashboard />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/all-ready" element={<AllReady />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
