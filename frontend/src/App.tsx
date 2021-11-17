import './App.css';
import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {Index} from 'components/pages'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
