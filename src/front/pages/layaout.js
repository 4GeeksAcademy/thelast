import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";

export const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
        <Route element={<Private />} path="/private" />
      </Routes>
    </BrowserRouter>
  );
};
