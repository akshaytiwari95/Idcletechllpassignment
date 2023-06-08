import UserShow from './UserShow';
function UserList({ users, onDelete, onEdit }) {
  return (
    <div className="d-flex  align-items-center p-2">
      {users.map(item => (
        <UserShow onDelete={onDelete} onEdit={onEdit} user={item} />
      ))}
    </div>
  );
}
export default UserList;
