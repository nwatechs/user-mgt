import React from 'react'

const UserCard = ({ user, setSelectedUser }) => {
  return (
    <div className="user" onClick={() => setSelectedUser(user)}>
             <figure>
               <img src={user.picture.thumbnail} alt="" />
             </figure>
             <div className="details">
               <h2>{user.name.first} {user.name.last}</h2>
               <p>@{user.login.username}</p>
               <p>{user.location.city}</p>
             </div>
           </div> 
  )
}

export default UserCard