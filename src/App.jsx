import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Dashboard from "./Components/dashboard";
import BackButtonHandler from "./Components/BackButtonHandler"; // Adjust path as needed
function App() {
  return (
    <BrowserRouter>

      <Routes>
                <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
