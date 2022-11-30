import React from 'react'
import react,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper Case was  Clicked!"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLowClick=()=>{
      // console.log("Lower Case was  Clicked!"+text);
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase!","success");

  }
    
  
  const handleClearClick=()=>{
    // console.log("Lower Case was  Clicked!"+text);
    let newText= '';
    setText(newText);
    props.showAlert("Text is clear!","success");

}
  
const downloadTxtFile = () => {
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  element.click();
  props.showAlert(" Text File is  Download sucessfully!","success");

}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speak!","success")


}

const handleCopy =()=>{
  console.log("I am copy");
  var text =document.getElementById("myBox");
  text.select();
  text.serSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard!","success")

}

    const handleOnChange=(event)=>{
        // console.log("Handle on change!");
        setText(event.target.value)
    }


 //State:-->
 
//Hooks:-->bina class banaye class ke feauture use krne me help krte ha
 const [text, setText] = useState("Enter text here....");// Correct way to change the state !!
//text="new text"
 // setText("New Text") --->Its is the wrong way to change the state!!y

  return (
<>

    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
  color:props.mode==='dark'?'white':'black'}} rows="13"></textarea>
</div>
<button className="btn btn-primary mx-3"  onClick={handleUpClick}>Convert to UperCase letter</button>
<button className="btn btn-danger mx-3"onClick={handleLowClick}>Convert to LowerCase letter</button>
<button className="btn btn-success mx-3"onClick={handleClearClick}>Clear the text</button>
<button className="btn btn-warning mx-3" onClick={downloadTxtFile}>Download Text</button>
<button className="btn btn-info mx-2 my-2" type="submit" onClick={speak} >Speak</button>
<button className="btn btn-success mx-3"  onClick={handleCopy}>Copy the Clipboard</button>


    </div>
    <div className="container my-4"style={{color:props.mode==='dark'?'white':'#002350'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").length}words and  {text.length} characters</p>
      <p> It takes {0.008 *text.split(" ").length} minutes to read</p>
     <h2>Preview</h2>
       <p>{text.length>0?text:"Enter your something in the text box above to preview it....."}</p>
    </div>
    </>
  )
}
