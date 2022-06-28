// this is the root component or the wrapper component that houses all of the other components
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
