// App.js
import React from 'react';
import './App.css';
import PDFButton from './components/PDFButton';
import PDFContent from './components/PDFContent';
import IMAGE from './components/IMAGE';

function App() {
  return (
    <div className="App">
      <PDFContent />
      {/* <IMAGE/> */}
      <PDFButton/>
    </div>
  );
}

export default App;
