import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import BasicModal from './Modal_hyunjin/PasswordModal';

function App() {
  return (
    <div className="App">
     <BasicModal></BasicModal>
=======
import React from 'react';
import MainPage from './MainPage_gahyun/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/diary' element={<MainPage />} />
        </Routes>
      </Router>
>>>>>>> a23a4a00471fa142d51489c4452557f29abf9077
    </div>
  );
}

export default App;
