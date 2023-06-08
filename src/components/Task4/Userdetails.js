import { useState, useEffect } from 'react';
import UserList from './UserList';
import axios from 'axios';

function UserDetails() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3001/users');
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUsers();
    return () => fetchUsers;
  }, []);
  async function handleDelete(id) {
    const response = axios.delete(`http://localhost:3001/users/${id}`);
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  }
  async function handleEdit(id, email, password, address, city, state, zip) {
    const response = await axios.put(`http://localhost:3001/users/${id}`, {
      email,
      password,
      address,
      city,
      state,
      zip,
    });
    console.log(response.data);
    const updatedUsers = users.map(item =>
      item.id === id ? { ...item, ...response.data } : item
    );
    setUsers(updatedUsers);
    console.log('edit');
  }
  return <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />;
}
export default UserDetails;
