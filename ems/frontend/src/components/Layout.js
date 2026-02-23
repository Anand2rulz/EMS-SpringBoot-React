import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      <div className="bg-dark text-white p-3" style={{ width: "220px" }}>
        <h4 className="text-center mb-4">EMS</h4>

        <ul className="nav flex-column gap-2">
          <li><Link className="nav-link text-white" to="/employees">👨‍💼 Employees</Link></li>
          <li><Link className="nav-link text-white" to="/attendance">📅 Attendance</Link></li>
          <li><Link className="nav-link text-white" to="/salary">💰 Salary</Link></li>
          <li><Link className="nav-link text-white" to="/leave">🏖 Leave</Link></li>
          <li><Link className="nav-link text-white" to="/department">🏢 Department</Link></li>
        </ul>

        <button
          className="btn btn-danger w-100 mt-4"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          🚪 Logo
          ut
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow-1 p-4 bg-light">
        {children}
      </div>
    </div>
  );
}

export default Layout;
