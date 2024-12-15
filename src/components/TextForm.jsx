import React, { useState } from 'react'

// TextForm.defaultProps = {
//     text : 'Enter the text!',
// };

export default function TextForm({heading = 'Enter the text!'}) {
    const handleUpClick = () => {
        //console.log("Uppercase clicked! Text => " + text)
        let newText = text.toUpperCase();
        setText(newText)
        //console.log(newText)
    }

    const handleLowClick = (eventLow) => {
        //console.log("Lowercase clicked! Text => " + text)
        let newText = text.toLowerCase();
        setText(newText)
        //console.log(newText)
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

    const [text, setText] = useState('Enter the text here')
    // setText("Type something..");  //Correct way to update text
  return (
    <div>
        <div className="container my-2">
            <label htmlFor="myTextBox" className="form-label"><h3>{heading}</h3></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} /* placeholder='Enter your text here..' */ id="myTextBox" rows="5"></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-2" onClick={handleSpeechClick}>To Speech</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>Your text has {text.length === 0 ? 0 : text.trim('').split(" ").length} words and {text.length} characters.</p>
            <p>Estimated average time to read the text will be { text.length === 0 ? 0 : text.trim().split(" ").length * 0.0032 } minutes.</p>
        </div>
    </div>
  )
}
