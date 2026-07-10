// Frontend/src/features/dashboard/Dashboard.jsx
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <span>Welcome, User!</span>
          <button className="logout-btn">Logout</button>
        </div>
      </header>
      
      <main className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p>128</p>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p>$4,250</p>
          </div>
          <div className="stat-card">
            <h3>Customers</h3>
            <p>89</p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p>42</p>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>Sales Overview</h2>
          <div className="chart-placeholder">
            <p>Sales chart would appear here</p>
          </div>
        </div>
        
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>New order #1234 received</li>
            <li>Payment processed for $125.00</li>
            <li>New customer registered</li>
            <li>Order #1233 shipped</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;