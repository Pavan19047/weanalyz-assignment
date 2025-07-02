import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaTicketAlt, FaClipboardList } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "New Ticket", path: "/new-ticket", icon: <FaTicketAlt /> },
    { name: "My Ticket", path: "/my-ticket", icon: <FaClipboardList /> },
  ];

  return (
    <div className="sidebar">
      {menu.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && <FiChevronRight className="arrow" />}
              <span className="icon">{item.icon}</span>
              <span className="label">{item.name}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
