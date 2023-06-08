function DoingComponent({ item, handleTaskDragStart }) {
  return (
    <div className=' DoingComponent'draggable onDragStart={e => handleTaskDragStart(e, item)}>
      {item}
    </div>
  );
}
export default DoingComponent;
