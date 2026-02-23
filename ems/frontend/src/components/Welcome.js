import React from "react";
import "./Login.css";

function Welcome({ setPage }) {
  return (
    <div className="login-bg">
      <div className="glass-card">

        <h2 className="title">🏢 EMS Portal</h2>

        <button className="glass-btn" onClick={() => setPage("login")}>
          Login
        </button>

        <br /><br />

        <button className="glass-btn">
          Register (Later)
        </button>

      </div>
    </div>
  );
}

export default Welcome;
