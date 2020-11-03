import React, { useEffect, useState } from 'react';

function App() {

  const [value, setValue] = useState('');

  useEffect(()=>{
    fetch('/.netlify/functions/hello?name=from Serverless Function')
    .then(res=>{
      res.json();
    })
    .then(result=>{
      console.log(result);
    })
    .catch(err=>{
      throw err;
    })
  }, [])

  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;
