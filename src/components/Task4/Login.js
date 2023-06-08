import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigation = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    email && password && address && city && state && zip
      ? navigation('/userDetails')
      : alert('enter the details before accessing the page');
    email &&
      password &&
      address &&
      city &&
      state &&
      zip &&
      handleCreate(email, password, address, city, state, zip);
  }
  async function handleCreate(email, password, address, city, state, zip) {
    try {
      const response = await axios.post('http://localhost:3001/users', {
        email,
        password,
        address,
        city,
        state,
        zip,
      });

      console.log(response);
    } catch (error) {
      console.error('error creating book:', error);
    }
  }
  return (
    <div className=" container-fluid my-5 w-50 bg-light text-dark p-10">
      <form onSubmit={handleSubmit} className="row g-3">
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
        </div>

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
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
