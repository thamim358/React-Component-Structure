import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MasterLayout } from "./Modules/Pages/MasterLayout";
import DashBoard from "./Modules/Pages/PageComponents/Dashboard/DashBoard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<MasterLayout />} />
          {/* <Route path="/dashboard" element={<DashBoard />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
