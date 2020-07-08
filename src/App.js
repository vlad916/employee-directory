import React from 'react';
import Header from './components/header';
import Employee from './components/employee';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className='container text-center'>
        <Employee />
      </main>
    </React.Fragment>
  );
}

export default App;
