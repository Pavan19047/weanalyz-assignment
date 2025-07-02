import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Layout.css"; // Ensure styles are included

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
