import { useState } from "react";
import "./Login.css";

export default function Register({ onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EMPLOYEE");

  const handleRegister = () => {
    if (!username || !password) {
      alert("Fill all fields");
      return;
    }
    alert(`Registered as ${role}. Now login.`);
    onBack();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Register</h2>

        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="EMPLOYEE">Employee</option>
          <option value="HR">HR</option>
        </select>

        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>

        <p className="register-link">
          Already have account?{" "}
          <span onClick={onBack}>Login</span>
        </p>
      </div>
    </div>
  );
}
