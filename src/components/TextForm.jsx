import React, { useState } from 'react'

// TextForm.defaultProps = {
//     text : 'Enter the text!',
// };

export default function TextForm({heading = 'Enter the text!', mode, showAlert}) {
    const handleUpClick = () => {
        //console.log("Uppercase clicked! Text => " + text)
        let newText = text.toUpperCase();
        setText(newText)
        //console.log(newText)
        showAlert("Converted to uppercase", "info")
    }

    const handleLowClick = (eventLow) => {
        //console.log("Lowercase clicked! Text => " + text)
        let newText = text.toLowerCase();
        setText(newText)
        //console.log(newText)
        showAlert("Converted to lowercase", "info")
    }

    const handleOnChange = (event) => {
        //console.log("Handling on change..");
        setText(event.target.value)
    }

    const handleSpeechClick = (eventSpeech) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text.length > 0 ? text : "Please enter some text.";
        window.speechSynthesis.speak(msg);
    }
    
    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("Extra spaces removed", "success")
    }

    const [text, setText] = useState('Enter the text here')
    // setText("Type something..");  //Correct way to update text
  return (
    <div>
        <div className={`container my-2 text-${mode === 'light' ? 'dark' : 'light'}`}>
            <label htmlFor="myTextBox" className="form-label"><h3>{heading}</h3></label>
            <textarea className="form-control" style={{color: mode === 'light' ? 'black' : 'white', backgroundColor: mode === 'light' ? 'white' : 'black'}} value={text} onChange={handleOnChange} /* placeholder='Enter your text here..' */ id="myTextBox" rows="5"></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-2" onClick={handleSpeechClick}>To Speech</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>RemoveExtraSpaces</button>
        </div>
        <div className={`container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
            <h3>Your text summary</h3>
            <p>Your text has {text.length === 0 ? 0 : text.trim('').split(" ").length} words and {text.length} characters.</p>
            <p>Estimated average time to read the text will be { text.length === 0 ? 0 : text.trim().split(" ").length * 0.0032 } minutes.</p>
        </div>
    </div>
  )
}
