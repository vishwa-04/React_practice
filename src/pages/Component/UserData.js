import {Link} from 'react-router-dom';
const UserData = ({ users }) => {
    return <>
        {
            users.map((curUser) => {
                const { id, name, email, } = curUser;
                const { street, city, zipcode } = curUser.address;
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{city},{city},{zipcode}</td>
                        <td> <Link to={'userPost'}>
                            View
                        </Link></td>
                    </tr>
                )
            })
        }
    </>
}
export default UserData