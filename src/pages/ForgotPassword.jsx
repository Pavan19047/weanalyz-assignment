import "./ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <p className="forgot-password-text">
          Don't worry, Enter your email below and we will send you a link to
          change password.
        </p>
        <input
          className="forgot-password-input"
          type="email"
          placeholder="Email"
        />
        <button className="submit-btn">Submit</button>
        <Link to="/login" className="signin-btn">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
