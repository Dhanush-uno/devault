import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Snippets from "./pages/Snippets";
import AddSnippet from "./pages/AddSnippet";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/snippets"
          element={
            <ProtectedRoute>
              <Snippets />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddSnippet />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
