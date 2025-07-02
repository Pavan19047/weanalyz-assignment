import "./Header.css";
import { useState } from "react";
import { Bell, User, LogOut } from "lucide-react";

const Header = ({ onLogout }) => {
  const [toggle, setToggle] = useState("BM");

  const handleToggle = () => {
    setToggle((prev) => (prev === "BM" ? "BI" : "BM"));
  };

  return (
    <header className="header">
      <h1 className="helpdesk-title">Helpdesk</h1>
      <div className="header-icons">
        <div className="toggle-container">
          <span className="toggle-bm">BM</span>
          <span className="toggle-bi">BI</span>
        </div>
        <Bell className="icon" size={24} />
        <User className="icon" size={24} />
        <LogOut className="icon" size={24} onClick={onLogout} />
      </div>
    </header>
  );
};

export default Header;
