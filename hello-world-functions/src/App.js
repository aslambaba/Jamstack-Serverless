import React, { useEffect, useState } from 'react';

function App() {

  const [value, setValue] = useState('');

  useEffect(() => {

    async function GetHelloWorldFunctionAPI() {
      const aa = await fetch('/.netlify/functions/hello?name=from Serverless Function')
      let aaa = await aa.json();
      setValue(aaa);
    }
    GetHelloWorldFunctionAPI();
  }, [])

  return (
    <div className="App">
      <h2>Welcome And  {value.message}</h2>
    </div>
  );
}

export default App;
