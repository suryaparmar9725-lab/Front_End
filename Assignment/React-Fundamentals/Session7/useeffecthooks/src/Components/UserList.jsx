import React, { useState } from 'react'

const UserList = () => {
      const [users, setUsers] = useState([]);

       const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
       <div>
      <h2>User List</h2>

      <button onClick={fetchUsers}>Load Users</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default UserList
