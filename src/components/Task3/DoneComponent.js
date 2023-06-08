function DoneComponent({ item, handleTaskDragStart }) {
  return (
    <div className="DoneComponent" draggable onDragStart={e => handleTaskDragStart(e, item)}>
      {item}
    </div>
  );
}
export default DoneComponent;
