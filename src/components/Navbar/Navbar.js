import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="cover">
      <h1>Idcle Tech Assignment</h1>
      <span>
        <Link to={'/'}>Task1</Link>
      </span>
      <span>
        <Link to={'/task2'}>Task2</Link>
      </span>
      <span>
        <Link to={'/task3'}>Task3</Link>
      </span>
      <span>
        <Link to={'/task4'}>Task4</Link>
      </span>
    </div>
  );
}
export default Navbar;
