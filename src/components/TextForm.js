import React from 'react';
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here...');

  const handleText = ()=>{
    let textup = text.toUpperCase();
    setText(textup);
    props.showAlert('Text Converted', 'success');
  }

  const handleChangeText = (event)=>{
    setText(event.target.value);
  }

  const [active, setActive] = useState(false); //the color is currently whit
  const handleClick = () => {
    setActive(!active);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  // const  numberCharacter = ()=>{
  //   let dataText = text.replace(/ /g, "");
  //   console.log(dataText.length);
  //   return dataText.length
  // }

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea style={{backgroundColor: props.mode === 'dark'?'#475d9f':'white', color: props.mode === 'dark' ? 'white' : '#475d9f'}} className="form-control" value={text} onChange={handleChangeText} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleText}>Convert to uppercase</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark' ?'white':'black'}}>
      <h1>Text Info</h1>
      <p>Number of word are {text.length}</p>
      <p>Number of character are {text.match(/\S+/g)?.length}</p>
      <p>{0.008 * text.length} minutes you can read</p>
      <h1>Preview</h1>
      <p onClick={handleClick} style={{ color: active ? "black":"red" }}>{text}</p>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    </>
  )
}
