import UserEdit from './UserEdit';
import { useState } from 'react';
function UserShow({ user, onDelete, onEdit }) {
  const [showEdit, setshowEdit] = useState(false);
  function handleSubmit(id, email, password, address, city, state, zip) {
    setshowEdit(!showEdit);
    onEdit(id, email, password, address, city, state, zip);
  }
  console.log('bata');
  return (
    <div className=" border border-secondary p-2 w-25 " key={user.id}>
      {showEdit ? (
        <UserEdit onSubmit={handleSubmit} user={user} />
      ) : (
        <div>
          {' '}
          <div>id:{user.id}</div>
          <div>email:{user.email}</div>
          <div>password:{user.password}</div>
          <div>address:{user.address}</div>
          <div>city:{user.city}</div>
          <div>state:{user.state}</div>
          <div>zip:{user.zip}</div>
          <button onClick={() => onDelete(user.id)}>delete</button>
          <button onClick={() => setshowEdit(!showEdit)}>update</button>
        </div>
      )}
    </div>
  );
}
export default UserShow;
