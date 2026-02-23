import React from "react";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <span className="navbar-brand fw-bold">EMS</span>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto">

          <li className="nav-item">
            <span className="nav-link">Employees</span>
          </li>

          <li className="nav-item">
            <span className="nav-link">Attendance</span>
          </li>

          <li className="nav-item">
            <span className="nav-link">Salary</span>
          </li>

          <li className="nav-item">
            <span className="nav-link">Leave</span>
          </li>

          <li className="nav-item">
            <span className="nav-link">Department</span>
          </li>

        </ul>

        <button className="btn btn-light btn-sm" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
