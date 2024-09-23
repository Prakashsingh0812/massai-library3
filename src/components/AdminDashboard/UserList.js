import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
