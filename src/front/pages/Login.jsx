import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pass })
    });
    const data = await res.json();
    if(data.token){
      sessionStorage.setItem("token", data.token);
      navigate("/private");
    } else {
      alert(data.msg || "Error");
    }
  };

  return (
    <div>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
