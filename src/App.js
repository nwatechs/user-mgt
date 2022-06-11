import {useState, useEffect} from 'react';
import { getUsers } from './utils/request';
import UserCard from './components/UserCard';
import './App.css';



function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data.results)
    })
  },[])
    

  return (
    <div className={`App ${selectedUser ? 'user-selected' : ''}`}>
      <div className="user-list">
         {
       users.length ? (
          users.map((user,index) => {
         return (
          <UserCard user={user} setSelectedUser={setSelectedUser} key={index} />
        )
      })
       ) : (
         <p>Loading users...</p>
       )
      
     }
      </div>
      {
        selectedUser &&
      <main>
        <h1>{ selectedUser.name.first}</h1>
      </main>
      }

    </div>
  );
}

export default App;
