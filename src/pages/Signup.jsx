import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <input type="text" placeholder="Full Name" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input type="text" placeholder="Username" className="signup-input" />
        <input type="password" placeholder="Password" className="signup-input" />
        <button className="signup-btn">Sign Up</button>
        <div className="signup-footer">
          Already have an account? <Link to="/login" className="signin-link">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
