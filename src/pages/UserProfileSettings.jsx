import "./UserProfileSettings.css";

const UserProfileSettings = () => {
  return (
    <div className="profile-settings-container">
      <div className="content-header">
        <h2 className="page-title">User Profile</h2>
      </div>

      <div className="edit-account-header">
        <button className="edit-account-btn">Edit Account</button>
      </div>

      <div className="profile-settings-content">
        <div className="form-labels-section">
          <div className="form-field-label">
            <span>Username</span>
          </div>
          <div className="form-field-label">
            <span>Current Password</span>
          </div>
          <div className="form-field-label">
            <span>New Password</span>
          </div>
          <div className="form-field-label">
            <span>Confirm Password</span>
          </div>
          <div className="form-field-label">
            <span>Email</span>
          </div>
          <div className="form-field-label">
            <span>Real Name</span>
          </div>
          <div className="form-field-label">
            <span>Access Level</span>
          </div>
          <div className="form-field-label">
            <span>Project Access Level</span>
          </div>
        </div>

        <div className="form-inputs-section">
          <div className="form-field-input">
            <input type="text" placeholder="Enter username" />
          </div>
          <div className="form-field-input">
            <input type="password" placeholder="Enter current password" />
          </div>
          <div className="form-field-input">
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className="form-field-input">
            <input type="password" placeholder="Confirm new password" />
          </div>
          <div className="form-field-input">
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="form-field-input">
            <input type="text" placeholder="Enter real name" />
          </div>
          <div className="form-field-input">
            <select>
              <option value="">Select access level</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="form-field-input">
            <select>
              <option value="">Select project access</option>
              <option value="full">Full Access</option>
              <option value="limited">Limited Access</option>
              <option value="read-only">Read Only</option>
            </select>
          </div>
        </div>
      </div>

      <div className="update-section">
        <button className="update-user-btn">Update User</button>
      </div>
    </div>
  );
};

export default UserProfileSettings;
