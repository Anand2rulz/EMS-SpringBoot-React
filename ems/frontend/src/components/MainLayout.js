import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import Employees from "./Employee";
import Analytics from "./Analytics";
import ChatBot from "./ChatBot";   // ✅ ADD THIS
import "./theme.css";

export default function MainLayout({
  role,
  username,
  onLogout,
  dark,
  setDark
}) {
  const [page, setPage] = useState("dashboard");

  return (
    <div className={dark ? "app dark" : "app"}>
      
      {/* SIDEBAR */}
      <Sidebar
        page={page}
        setPage={setPage}
        role={role}
        username={username}
        onLogout={onLogout}
        dark={dark}
        setDark={setDark}
      />

      {/* MAIN CONTENT */}
      <div className="content">
        {page === "dashboard" && <DashboardHome role={role} />}
        {page === "employees" && role === "ADMIN" && <Employees />}
        {page === "analytics" && <Analytics />}
      </div>

      {/* 🤖 AI CHATBOT (GLOBAL) */}
      <ChatBot />
    </div>
  );
}
