import './App.css';
import React , { useRef } from 'react';

function App() {

  const StudentName = useRef('');
  function Haa() {
    alert('aa')
    console.log(StudentName.current.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='Enter Student Name: ' ref={StudentName}/>
        <button onSubmit={Haa()} type='submit' >Submit</button>
      </header>
    </div>
  ); 
}

export default App;
