import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';

import TudoList from './components/Task3/Tudolist';
import Login from './components/Task4/Login';
import UserDetails from './components/Task4/Userdetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<TudoList />} />
        <Route path="/task4" element={<Login />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
