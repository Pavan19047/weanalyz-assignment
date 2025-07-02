import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Helpdesk System</h2>
        <input className="login-input" type="text" placeholder="Username" />
        <input className="login-input" type="password" placeholder="Password" />
        <button className="login-btn">Sign In</button>
        <div className="login-links">
          <Link to="/forgot-password" className="forgot-password">
            Forgot password
          </Link>
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
