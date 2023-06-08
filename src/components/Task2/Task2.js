import { useState } from 'react';

import List from './List';

function Task2() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <button
        onClick={() => setDisplay(!display)}
        type="button"
        className="btn btn-primary "
      >
        Planets
      </button>
      <div className="container">
        <div className="row"> {display && <List />}</div>
      </div>
    </>
  );
}
export default Task2;
