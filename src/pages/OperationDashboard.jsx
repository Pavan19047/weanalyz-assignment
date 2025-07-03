import "./OperationDashboard.css";

const OperationDashboard = () => {
  return (
    <div className="operation-dashboard-container">
      <div className="content-header">
        <h2 className="page-title">Dashboard</h2>
      </div>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card blue">
          <h3>Total Tickets</h3>
          <span className="metric-number">12</span>
        </div>
        <div className="metric-card green">
          <h3>Total Solved</h3>
          <span className="metric-number">8</span>
        </div>
        <div className="metric-card red">
          <h3>Total Awaiting Approval</h3>
          <span className="metric-number">2</span>
        </div>
        <div className="metric-card yellow">
          <h3>Total in Progress</h3>
          <span className="metric-number">2</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/* Performance Chart */}
        <div className="chart-section">
          <div className="chart-placeholder">
            <div className="chart-bars">
              <div className="chart-bar" style={{ height: "60%" }}></div>
              <div className="chart-bar" style={{ height: "80%" }}></div>
              <div className="chart-bar" style={{ height: "100%" }}></div>
              <div className="chart-bar" style={{ height: "70%" }}></div>
            </div>
          </div>
        </div>

        {/* Right Side - Team and Feedback */}
        <div className="right-side">
          {/* Team Members */}
          <div className="team-section">
            <div className="team-member">
              <div className="member-icon support">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M21 11H15L13.5 7.5C13.1 6.6 12.2 6 11.2 6H10.8C9.8 6 8.9 6.6 8.5 7.5L6 13H4V15H6.2L8.2 11.5L7 18H9L10.2 13H11.8L13 18H15L13.8 11.5L15.5 11H21Z" />
                </svg>
                <span className="member-count">3</span>
                <span className="member-label">Technical Supports</span>
              </div>
            </div>
            <div className="team-member">
              <div className="member-icon operation">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M21 11H15L13.5 7.5C13.1 6.6 12.2 6 11.2 6H10.8C9.8 6 8.9 6.6 8.5 7.5L6 13H4V15H6.2L8.2 11.5L7 18H9L10.2 13H11.8L13 18H15L13.8 11.5L15.5 11H21Z" />
                </svg>
                <div className="operation-badge">×</div>
                <span className="member-count">4</span>
                <span className="member-label">Operation Team</span>
              </div>
            </div>
          </div>

          {/* Customer Feedback */}
          <div className="feedback-section">
            <h3>Customer Feedback</h3>
            <div className="star-rating">
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star half">★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Customer Feedback */}
      <div className="full-feedback-section">
        <h3>Customer Feedback</h3>
        <div className="star-rating-large">
          <span className="star-large filled">★</span>
          <span className="star-large filled">★</span>
          <span className="star-large filled">★</span>
          <span className="star-large filled">★</span>
          <span className="star-large half">★</span>
        </div>
      </div>
    </div>
  );
};

export default OperationDashboard;
