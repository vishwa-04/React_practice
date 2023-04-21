import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import UserData from '../Component/UserData';
import '../userData/css/post.css';
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
    <div className='button'>
    <Link className='crtBtn' to={'/userForm'}>Create Form</Link>
    </div>
  </>
}
export default UserDetails