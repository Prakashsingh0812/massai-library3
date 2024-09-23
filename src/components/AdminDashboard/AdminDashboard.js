import React from 'react';
import UserList from './UserList';
import BookAvailabilityChart from './BookAvailabilityChart';
import GenreDistributionChart from './GenreDistributionChart';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <UserList />
      <BookAvailabilityChart />
      <GenreDistributionChart />
    </div>
  );
};

export default AdminDashboard;
