import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// const dotenv=require('dotenv');
// dotenv.config();
// require('dotenv').config();

function App() {
  const [result, setResult]=useState("");
  async function feachInfo(){
    const url=`${process.env.REACT_APP_API_URL}/test`
    const response=await fetch(url);
    console.log(response);
    const json= await response.json();
    console.log(json);
    setResult(json);
  }
  return (
    <div>
      <button onClick={feachInfo}>
        Fetch information from app
      </button>
      <div>
        Result: {result}
      </div>
    </div>
  )
}

export default App;
