import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold">AI Comic Generator</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
