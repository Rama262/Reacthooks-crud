import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Mobile Number</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.mobilenumber}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
            
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
               
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}></td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
