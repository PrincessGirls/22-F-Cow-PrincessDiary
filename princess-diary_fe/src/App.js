import logo from './logo.svg';
import './App.css';
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
    </div>
  );
}

export default App;
