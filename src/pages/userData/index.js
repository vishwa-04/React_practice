import {useEffect} from 'react';

function UserDetails(){
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      }, []);
}
export default UserDetails