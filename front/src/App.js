import "./App.css";
import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WritePage from "./components/WritePage";
import DiaryView from "./components/DiaryView";

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
