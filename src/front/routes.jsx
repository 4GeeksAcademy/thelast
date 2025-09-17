import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./pages/Privates";

function Ping() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Frontend OK</h1>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> |{" "}
        <Link to="/private">Private</Link>
      </nav>
    </div>
  );
}

export const Layout = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Ping />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/private" element={<Private />} />
    </Routes>
  </BrowserRouter>
);
