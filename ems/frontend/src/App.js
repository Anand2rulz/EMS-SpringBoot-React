import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import MainLayout from "./components/MainLayout";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState("");
  const [page, setPage] = useState("login"); // login | register
  const [dark, setDark] = useState(false);

  const handleLogin = (userRole, userName) => {
    setRole(userRole);
    setUsername(userName);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setRole(null);
    setUsername("");
    setPage("login");
  };

  if (!loggedIn) {
    return page === "login" ? (
      <Login
        onLogin={handleLogin}
        onRegister={() => setPage("register")}
      />
    ) : (
      <Register onBack={() => setPage("login")} />
    );
  }

  return (
    <MainLayout
      role={role}
      username={username}
      onLogout={handleLogout}
      dark={dark}
      setDark={setDark}
    />
  );
}
