function UsersList() {
    const users = [
      { id: 1, name: "Rahul" },
      { id: 2, name: "Amit" }
    ];
  
    return (
      <ul>
        <h2>User</h2>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
  
  export default UsersList;
  