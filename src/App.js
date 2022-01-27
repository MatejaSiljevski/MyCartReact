import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import CartContainer from './components/CartContainer';
import { useGlobalContext } from './context/context';

function App() {
  const {loading} = useGlobalContext()

  if(loading){
    return(
      <div className='loading'>
        <h1>...Loading</h1>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
