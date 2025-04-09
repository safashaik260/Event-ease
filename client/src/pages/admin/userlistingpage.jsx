import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Userlistingpage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/user/userlist`).then((res) => {
            console.log(res)
            setUsers(res.data.data)
        }).catch(err => {
            console.log(err, "error")
            alert(err.res.data.message)
        })
    }, [])

    return (
        

<div className="overflow-x-auto">
  <table className="table border-2px">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>Email</th>
        <th>registered date</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
      users.map(user => (
        <tr key={user._id}>
            <th></th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          
          <td>{new Date(user.createdAt).toLocaleDateString()}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4">No users found</td>
      </tr>
    )}
          </tbody>
  </table>
</div>
    
    )
}

export default Userlistingpage