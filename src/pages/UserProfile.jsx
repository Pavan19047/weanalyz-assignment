import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <div className="content-header">
        <h2 className="page-title">User Profile</h2>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="avatar-section">
            <div className="avatar"></div>
          </div>
          <div className="profile-details">
            <div className="profile-field">
              <span className="field-label">Username</span>
            </div>
            <div className="profile-field">
              <span className="field-label">Contact Number</span>
            </div>
            <div className="profile-field">
              <span className="field-label">Email</span>
            </div>
            <div className="profile-field">
              <span className="field-label">Department</span>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <h3 className="feedback-title">Give Your Feedback</h3>
          <div className="feedback-form">
            <div className="feedback-input">
              <span className="feedback-placeholder">[Lorem Ipsum]</span>
            </div>
            <div className="star-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <button className="submit-feedback-btn">Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
