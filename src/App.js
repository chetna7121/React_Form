import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Success from './Success';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1>React Form</h1>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
