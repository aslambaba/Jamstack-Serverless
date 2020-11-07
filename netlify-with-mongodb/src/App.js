import React, { useRef }  from 'react';

function App() {

  const StudentName = useRef('');
  const StudentAge = useRef(0);
  const StudentClass = useRef('');

  async function H(){
    console.log(StudentName.current.value);

    const student = {
      name: StudentName.current.value,
      age: StudentAge.current.value,
      class: StudentClass.current.value,
    };

    fetch('/.netlify/functions/students', {
      method: 'POST',
      body: JSON.stringify(student),
    });

    StudentName.current.value = '';
  }

  return (
    <div className="App">
        <input placeholder="Enter Name: " ref={StudentName} />
        <input placeholder="Enter Age: " ref={StudentAge} />
        <input placeholder="Enter Class: " ref={StudentClass} />
        <button onClick={H}>Submit</button>
    </div>
  ); 
}

export default App;
