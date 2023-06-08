import DoingComponent from './DoingComponent';
function DoingList({ Doing, handleTaskDragStart }) {
  const renderedList = Doing.map(item => (
    <DoingComponent handleTaskDragStart={handleTaskDragStart} item={item} />
  ));
  return renderedList;
}
export default DoingList;
