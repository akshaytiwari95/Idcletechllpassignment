import { useState } from 'react';
function CreateTodo({ handleCreate }) {
  const [title, setTitle] = useState('');
  function handleChange(e) {
    setTitle(prev => e.target.value);
    console.log('hey');
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleCreate(title);
    setTitle('');
  }

  return (
    <div className='create-todo'>
      <h3>Add task to do</h3>
      <form onSubmit={handleSubmit}>
        {' '}
        <label> Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  );
}
export default CreateTodo;
