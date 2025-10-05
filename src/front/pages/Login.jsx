import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pass })
    });
    const data = await res.json();
    if (data.token) {
      sessionStorage.setItem("token", data.token);
      navigate("/private");
    } else {
      alert(data.msg || "Error");
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
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
          <span className="fa fa-sign-in-alt fa-4x text-success mb-3" style={{ filter: 'drop-shadow(0 2px 8px #fda085)' }}></span>
          <h2 className="fw-bold mb-2" style={{ letterSpacing: '1px' }}>Iniciar sesión</h2>
          <p className="text-muted mb-0">Accede a tu cuenta</p>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Contraseña</label>
          <input className="form-control" type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
        </div>
        <button className="btn btn-success w-100 py-2 fw-bold rounded-pill" onClick={handleLogin}>
          <span className="fa fa-sign-in-alt me-2"></span> Entrar
        </button>
      </div>
    </div>
  );
}
