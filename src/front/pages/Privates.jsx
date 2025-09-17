import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Private() {
  const [msg,setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const token = sessionStorage.getItem("token");
    if(!token) return navigate("/login");

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/private`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(r=>r.json())
    .then(d=>{
      if(d.email) setMsg(`Bienvenido ${d.email}`);
      else navigate("/login");
    });
  },[]);

  return (
    <div>
      <h2>{msg || "Cargando..."}</h2>
      <button onClick={()=>{
        sessionStorage.removeItem("token");
        navigate("/login");
      }}>Logout</button>
    </div>
  );
}
