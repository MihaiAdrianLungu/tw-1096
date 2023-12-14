import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Login from './Login';
import Navbar from './Navbar';
import Profile from './Profile';
import useCheckToken from './useCheckToken';
import { useSelector } from 'react-redux';
import Order from './Order';

function App() {
  const {loggedIn, checkTokenLoading} = useSelector((state) => state.global);

  useCheckToken();

  return (
    <Router>
      <Navbar/>
      <Routes>
        {checkTokenLoading ?
          <Route path='*' element={<div>Spinner</div>} /> 
          :
          <>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={loggedIn ? <Profile /> : <Navigate to='/login' />} />
            <Route path='/orders' element={<Order />} />
          </>}

      </Routes>
    </Router>
  );
}

export default App;