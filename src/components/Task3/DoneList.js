import DoneComponent from './DoneComponent';
function DoneList({ Done, handleTaskDragStart }) {
  const renderedList = Done.map(item => (
    <DoneComponent handleTaskDragStart={handleTaskDragStart} item={item} />
  ));
  return renderedList;
}
export default DoneList;
