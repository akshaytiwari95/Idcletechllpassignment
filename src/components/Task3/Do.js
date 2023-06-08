function DoComponent({ item, handleTaskDragStart }) {
  console.log(typeof item);
  console.log(handleTaskDragStart);
  return (
    <div
      className="DoComponent"
      draggable
      onDragStart={e => handleTaskDragStart(e, item)}
    >
      {item}
    </div>
  );
}
export default DoComponent;
