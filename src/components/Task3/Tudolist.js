import CreateTodo from './Create';
import { useState } from 'react';
import DoList from './DoList';
import DoingList from './DoingList';
import DoneList from './DoneList';
function TudoList() {
  const [Do, setDo] = useState([]);
  const [Doing, setDoing] = useState([]);
  const [Done, setDone] = useState([]);
  console.log(Done);
  function handleCreate(title) {
    setDo(item => [...item, title]);
  }
  function handleTaskDragStart(e, item) {
    e.dataTransfer.setData('text', item);
  }
  function handleTaskDrop(e) {
    // console.log(e.currentTarget.contains('doing-tAB'));
    const taskText = e.dataTransfer.getData('text');
    console.log(taskText);
    console.log(e.currentTarget.classList.contains('done-tAB'));
    console.log(e.currentTarget.classList.contains('doing-tAB'));
    e.currentTarget.classList.contains('do-tAB') && setDo([...Do, taskText]);
    e.currentTarget.classList.contains('doing-tAB') &&
      setDoing([...Doing, taskText]);
    e.currentTarget.classList.contains('done-tAB') &&
      setDone([...Done, taskText]);
  }
  return (
    <div>
      <div className="outer">
        <div
          className="do-tAB"
          onDragOver={e => e.preventDefault()}
          onDrop={e => handleTaskDrop(e)}
        >
          <h1>DO</h1>
          <DoList Do={Do} handleTaskDragStart={handleTaskDragStart} />
        </div>
        <div
          className="doing-tAB"
          onDragOver={e => e.preventDefault()}
          onDrop={e => handleTaskDrop(e)}
        >
          <h1>DOING</h1>
          <DoingList Doing={Doing} handleTaskDragStart={handleTaskDragStart} />
        </div>
        <div
          className="done-tAB"
          onDragOver={e => e.preventDefault()}
          onDrop={e => handleTaskDrop(e)}
        >
          <h1>DONE</h1>
          <DoneList Done={Done} handleTaskDragStart={handleTaskDragStart} />
        </div>
      </div>{' '}
      <CreateTodo handleCreate={handleCreate} />
    </div>
  );
}
export default TudoList;
