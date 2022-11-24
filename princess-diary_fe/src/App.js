import "./App.css";
import React from "react";
import MainPage from "./MainPage_gahyun/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WritePage from "./writepage_sebin/writepage";
import DiaryView from "./DiaryViewPage_hyunjin/DiaryView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/diary/:id" element={<DiaryView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
