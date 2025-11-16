import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Snippets from "./pages/Snippets";
import AddSnippet from "./pages/AddSnippet";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Snippets />} />
      <Route path="/add" element={<AddSnippet />} />
    </Routes>
  );
}
