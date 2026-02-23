import { useState } from "react";
import "./Login.css";

export default function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EMPLOYEE");

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>EMS Login</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ADMIN">Admin</option>
          <option value="EMPLOYEE">Employee</option>
          <option value="HR">HR</option>
        </select>

        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={() => onLogin(role, username)}>Login</button>

        <p>
          New user? <span onClick={onRegister}>Register</span>
        </p>
      </div>
    </div>
  );
}
