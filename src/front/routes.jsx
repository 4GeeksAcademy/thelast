import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./pages/Privates";

function Ping() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
      fontFamily: 'Inter, Arial, sans-serif'
    }}>
      <div className="card shadow-lg border-0" style={{
        maxWidth: 420,
        width: '100%',
        padding: '2.5rem 2rem',
        borderRadius: '1.5rem',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}>
        <div className="text-center mb-4">
          <span className="fa fa-rocket fa-4x text-primary mb-3" style={{ filter: 'drop-shadow(0 2px 8px #66a6ff)' }}></span>
          <h1 className="fw-bold mb-2" style={{ letterSpacing: '1px' }}>¡Frontend OK!</h1>
          <p className="text-muted mb-0">Tu proyecto está listo para usar.</p>
        </div>
        <nav className="d-flex flex-column gap-3 mt-4">
          <Link to="/login" className="btn btn-success btn-lg fw-bold rounded-pill shadow-sm">
            <span className="fa fa-sign-in-alt me-2"></span> Login
          </Link>
          <Link to="/signup" className="btn btn-primary btn-lg fw-bold rounded-pill shadow-sm">
            <span className="fa fa-user-plus me-2"></span> Registro
          </Link>
          <Link to="/private" className="btn btn-dark btn-lg fw-bold rounded-pill shadow-sm">
            <span className="fa fa-lock me-2"></span> Private
          </Link>
        </nav>
      </div>
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
