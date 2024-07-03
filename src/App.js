
import Images from './images'
import React , {useState} from 'react';
import './main.css';




function App() {
  const [select,setSelect]=(useState)(Images[0]);
  
  
  return (
    
    <div className="App">
      <div className="container">

      <div className="selected">
        <img src={select}  alt="tantuni" />
      
      </div>
      <div className="input">
        {Images.map((img,index)=>(<img key={index} src={img} alt='tantuni'
        onClick={()=>setSelect(img)}/>))}
    
        
    
      </div>
    
    </div>

      </div>
  );
}

export default App;
