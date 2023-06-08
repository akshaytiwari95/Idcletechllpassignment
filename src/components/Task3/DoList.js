import DoComponent from './Do';
function DoList({ Do, handleTaskDragStart }) {
  console.log(handleTaskDragStart);
  const renderedList = Do.map(item => (
    <DoComponent handleTaskDragStart={handleTaskDragStart} item={item} />
  ));
  return renderedList;
}
export default DoList;
