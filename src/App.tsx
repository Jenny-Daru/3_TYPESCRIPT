import React from 'react';
import './App.css';
import Circle from './components/Circle';

function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor='yello' />
      <Circle bgColor="tomato" text="im here" />
    </div>
  );
}

export default App;
