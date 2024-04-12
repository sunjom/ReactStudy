import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts'
import {useState, Fragment } from 'react'
import Examples from './components/Examples'
function App() {

  return (
    <>
      <Header/>
      <main>
          <CoreConcepts/>
          <Examples/>
      </main>
    </>
  );
}

export default App;
