import "./DashBoard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-cards">
        <div className="dash-card blue">
          <h3>Total Tickets</h3>
          <p>12</p>
        </div>
        <div className="dash-card green">
          <h3>Total Solved</h3>
          <p>8</p>
        </div>
        <div className="dash-card red">
          <h3>Total Awaiting Approval</h3>
          <p>2</p>
        </div>
        <div className="dash-card yellow">
          <h3>Total in Progress</h3>
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
