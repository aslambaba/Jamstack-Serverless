import React, { useEffect, useState } from 'react';

function App() {

  const [value, setValue] = useState('');
  useEffect(() => {

    async function GetHelloWorldFunctionAPI() {
      const aa = await fetch('/.netlify/functions/hello?name=From Serverless Functions')
      let aaa = await aa.json();
      setValue(aaa);
      console.log(getName.current.value)
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
