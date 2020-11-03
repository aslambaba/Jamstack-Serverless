import React, { useEffect, useState } from 'react';

function App() {

  const [value, setValue] = useState('');

  useEffect(()=>{
    fetch('/.netlify/functions/hello?name=AslamBaba')
    .then(res=>{
      res.json();
    })
    .then(result=>{
      console.log(result);
    })
  })

  return (
    <div className="App">
      <h2></h2>
    </div>
  );
}

export default App;
