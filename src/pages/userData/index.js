import { useEffect, useState } from 'react';
import UserData from '../Component/UserData';

function UserDetails() {

  const [users, setUsers] = useState([])
  const fetchUser = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data)
      }
    }
    catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    fetchUser()

  }, [])
  return <>
    <table>
      <thead>
        <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ADDRESS</th>
        <th>View</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users}/>
      </tbody>
    </table>
  </>
}
export default UserDetails