import React from 'react';
import ExampleComponent from './ExampleComponent';
import TestComponent from './TestComponent'; // Import the TestComponent

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExampleComponent />
        {/* Remove any second ExampleComponent if exists */}
        <h1>Now</h1> {/* Replace the contents of the h1 element */}
        <TestComponent /> {/* Add the new TestComponent */}
      </header>
    </div>
  );
}

export default App;
