import "../components/TodoApp"; 
import '../styles/UserList.css'

function UserList({ users }) {
   console.log("Received users in UserList:", users)
  return (
    <div className="user-table-container">
      <table className="table user-table">
        <thead>
          <tr>
            <th><input type="checkbox" disabled /></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {(users || []).map((user, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.languages.join(", ")}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
