import './App.css';
import { useState,useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[])
  return (
    <div>
<p>{ message }</p>    </div>
  );
}

export default App;
