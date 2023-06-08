import { useState } from 'react';

function Details({ item }) {
  const [show, setShow] = useState(false);

  return (
    <div className="col" key={item.id}>
      <button
        onClick={() => setShow(!show)}
        type="button"
        className="btn btn-secondary"
      >
        {item.name}
      </button>
      <div
        className="card"
        style={show ? { width: '18rem', height: '40rem' } : { display: 'none' }}
      >
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.details}</p>
        </div>
      </div>
    </div>
  );
}
export default Details;
