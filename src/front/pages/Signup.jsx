import { useState } from "react";

export function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const send = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pass })
    })
    .then(r => r.json())
    .then(d => alert(d.msg || "ok"));
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
      <button onClick={send}>Crear cuenta</button>
    </div>
  );
}
