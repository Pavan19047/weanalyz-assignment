import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import OperationDashboard from "./pages/OperationDashboard";
import NewTicket from "./pages/NewTicket";
import MyTicket from "./pages/MyTicket";
import UserProfile from "./pages/UserProfile";
import UserProfileSettings from "./pages/UserProfileSettings";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected layout routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/operation-dashboard" element={<OperationDashboard />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/my-ticket" element={<MyTicket />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route
            path="/user-profile-settings"
            element={<UserProfileSettings />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
