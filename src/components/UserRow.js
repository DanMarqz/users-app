import React from 'react'

export const UserRow = ({ user }) => {
  return (
    <tr>
      <td> { user.id } </td>
      <td> { user.email } </td>
      <td> { user.last_name } { user.first_name } </td>
      <td> 
        <img 
          src={ user.avatar } 
          className="img-thumbnail"
          alt={user.last_name} 
          style={{
            width: 50
          }}
        />
      </td>
    </tr>
  )
}
