import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams } from 'react-router-dom'

function Users() {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);   
    const { id } = useParams(); 

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false));
    }, []);

  return (
    <div>
        <h1>Users</h1>
        {loading && <div>Loading..</div>}
        <ul>
            {users.map((users) => (
                <li key={users.id}>
                    <NavLink to={`user/${users.id}`}>{users.name}</NavLink>
                </li>
            ))}
        </ul>
        <Outlet />
        <br />
        <NavLink to={`user/${id == null ? 1 : parseInt(id) + 1}`}>
            Next User ({id == null ? 1 : parseInt(id)  + 1})
        </NavLink>
    </div>
  )
}

export default Users