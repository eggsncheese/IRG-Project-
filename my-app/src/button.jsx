import React from 'react';
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function App() {
  return (
    <button value="hello!" onClick={myFunction}>
      Click me!
    </button>
  );
}

export default App;