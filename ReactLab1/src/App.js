import React,{useState} from 'react'
import './App.css';
import DisplayDate from './DisplayDate'

function App() {
  const [number,setNumber]=useState(1);

  const move=()=>{
    if(number==3){
      setNumber(1)
    }
    else{
      setNumber(number+1)
    }
  }

  var date=new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  var time = date.toLocaleTimeString();

  date = mm + '/' + dd + '/' + yyyy + '' + "     Time:" +time;

  
  return (
    <div className="App">
      <button onClick={move}>Click here</button>
      <div className="main">
        <div className="box" style={number==1?{backgroundColor:"black"}:{backgroundColor:"white"}}></div>
        <div className="box" style={number==2?{backgroundColor:"green"}:{backgroundColor:"white"}}></div>
        <div className="box" style={number==3?{backgroundColor:"purple"}:{backgroundColor:"white"}}></div>
      </div>
      <DisplayDate date={date}/>
    </div>
  );
}

export default App;