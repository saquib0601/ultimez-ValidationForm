import React from "react";
import "./Dashboard.css"; // Import the CSS file for styles

const Dashboard = ({ userData }) => {
  if (!userData) {
    return <div className="loading">Loading...</div>; // Handle the case where userData is not available
  }

  console.log(userData);
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <table className="dashboard-table">
        <tbody>
          <tr>
            <td className="dashboard-label">Full Name</td>
            <td className="dashboard-value">{userData.full_name}</td>
          </tr>
          <tr>
            <td className="dashboard-label">Username</td>
            <td className="dashboard-value">{userData.username}</td>
          </tr>
          <tr>
            <td className="dashboard-label">Referral ID</td>
            <td className="dashboard-value">{userData.referral_row_id}</td>
          </tr>
          <tr>
            <td className="dashboard-label">Referral Username</td>
            <td className="dashboard-value">{userData.referral_username}</td>
          </tr>
          <tr>
            <td className="dashboard-label">Email ID</td>
            <td className="dashboard-value">{userData.email_id}</td>
          </tr>
          <tr>
            <td className="dashboard-label">Mobile Number</td>
            <td className="dashboard-value">{userData.mobile_number}</td>
          </tr>
          <tr>
            <td className="dashboard-label">Country ID</td>
            <td className="dashboard-value">{userData.country_row_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
