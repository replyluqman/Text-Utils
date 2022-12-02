import React, { useState } from 'react'

export default function TextUtils(props) {
    const [text , setText] = useState('');
   const textChange=(event) =>{
    setText(event.target.value);
    
   }
   const convertUpper= ()=>{
    let newText = text.toUpperCase();
    setText(newText);

   }
   const convertLower=()=>{
    let newText = text.toLowerCase();
    setText(newText);
   }
   const clearText=()=>{
    let newText = ('');
    setText(newText);
   }
   const removeExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
   }
   const copyText=()=>{
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
   }
    
  return (
    <>
   <div className={`container py-3 text-${props.mode === 'dark'?'light':'dark' }`}>
    <h2>Enter your text below   </h2>
<div className="mb-3" >
  <textarea onChange={textChange} className="form-control" value={text} id="myBox" rows="8" style={{backgroundColor:props.mode === 'light'?'white':'grey',
 color: props.mode==='dark'? 'white':'black'}}></textarea>
</div>
<button onClick={convertUpper} className="btn btn-primary">Convert to Uppercase</button>
<button onClick={convertLower} className="btn btn-primary mx-1">Convert to Lowercase</button>
<button onClick={clearText} className="btn btn-primary mx-1">Clear</button>
<button onClick={removeExtraSpaces} className="btn btn-primary mx-1">Remove Extra Spaces</button>
<button onClick={copyText} className="btn btn-primary mx-1">Copy Text</button>
</div>
<div className={`container `} style={{ color: props.mode==='dark'? 'white' :'black' }}>
  <h2>Text Summary</h2>
  <h5 className='my-3'>{text.split(' ').length} Words {text.length} Characters</h5>
  <h3>Preview</h3>
  <p className='my3'>{text}</p>
</div>
    </>
  );
}
