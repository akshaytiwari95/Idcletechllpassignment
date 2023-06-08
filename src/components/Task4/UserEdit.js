import { useState } from 'react';
function UserEdit({ user, onSubmit }) {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [zip, setZip] = useState(user.zip);
  console.log('tata');
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(user.id, email, password, address, city, state, zip);
  }
  return (
    <form onSubmit={handleFormSubmit} className="row g-3 mw-100">
      <h1>Registration</h1>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">
          Email
        </label>

        <input
          value={email}
          type="email"
          className="form-control"
          id="inputEmail4"
          onChange={e => setEmail(prev => e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">
          Password
        </label>
        <input
          value={password}
          onChange={e => setPassword(prev => e.target.value)}
          type="password"
          className="form-control"
          id="inputPassword4"
        />
      </div>
      <div className="col-12">
        <label for="inputAddress" className="form-label">
          Address
        </label>
        <input
          value={address}
          onChange={e => setAddress(prev => e.target.value)}
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>{' '}
      <div className="col-md-6">
        <label for="inputCity" className="form-label">
          City
        </label>
        <input
          value={city}
          onChange={e => setCity(prev => e.target.value)}
          type="text"
          className="form-control"
          id="inputCity"
        />
      </div>
      <div className="col-md-4">
        <label for="inputState" className="form-label">
          State
        </label>
        <input
          value={state}
          onChange={e => setState(prev => e.target.value)}
          type="text"
          className="form-control"
          id="inputState"
        />
      </div>
      <div className="col-md-2">
        <label for="inputZip" className="form-label">
          Zip
        </label>
        <input
          value={zip}
          onChange={e => setZip(prev => e.target.value)}
          type="text"
          className="form-control"
          id="inputZip"
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          update
        </button>
      </div>
    </form>
  );
}
export default UserEdit;
