import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddSnippet from "../pages/AddSnippet/AddSnippet"; // import correctly
import NotFound from "../pages/NotFound/NotFound";
import Snippets from "../pages/Snippets/Snippets";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/add-snippet" element={<AddSnippet />} /> {/* fixed */}
      <Route path="/snippets" element={<Snippets/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
