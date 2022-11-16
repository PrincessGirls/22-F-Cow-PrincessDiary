import './App.css';
import React from 'react';
import MainPage from './MainPage_gahyun/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WritePage from './writepage_sebin/writepage';
import PassWordModal from './Modal_hyunjin/PasswordModal';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
