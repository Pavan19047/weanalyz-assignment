import "./Header.css";
import { useState } from "react";
import {
  Bell,
  User,
  LogOut,
} from "lucide-react";

const Header = ({ onLogout }) => {
  const [toggle, setToggle] = useState("BM");

  const handleToggle = () => {
    setToggle((prev) => (prev === "BM" ? "BI" : "BM"));
  };

  return (
    <header className="header">
      <h1 className="logo">Helpdesk</h1>
      <div className="header-icons">
        <span
          className={`tag ${toggle === "BM" ? "black" : "white"}`}
          onClick={handleToggle}
        >
          {toggle}
        </span>
        <Bell className="icon" size={24} />
        <User className="icon" size={24} />
        <LogOut className="icon" size={24} onClick={onLogout} />
      </div>
    </header>
  );
};

export default Header;
