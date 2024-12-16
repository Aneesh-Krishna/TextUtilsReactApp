import React, { useState } from 'react'

export default function About({mode}) {

  const [myStyle, setMyStyle] = useState ({
    color : 'white',
    backgroundColor : 'black',
  })

  const [btnText, setBtnText] = useState("Enable Light Mode")

  const toggleStyle = () => {
    if(myStyle.color == 'white')
    {
        setMyStyle({
            color : 'black',
            backgroundColor : 'white',
        })

        setBtnText("Enable Dark Mode")
    }
    else{
        setMyStyle({
            color : 'white',
            backgroundColor : 'black',
            border: '1px solid white'
        })

        setBtnText("Enable Light Mode")
    }
  }  

  return (
    <div className={`container my-2 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <h4 className="mx-2 my-2" style={{color: mode === 'light' ? 'black' : 'white'}}>About Us</h4>
    <div className="accordion accordion-flush" id="accordionFlushExample" style={{border: '1px solid black'}}>
        <div className="accordion-item" style={{color: mode === 'light' ? 'black' : 'white', backgroundColor: mode === 'light' ? 'white' : 'black'}}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{color: mode === 'light' ? 'black' : 'white', backgroundColor: mode === 'light' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Application
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" style={{color: mode === 'light' ? 'black' : 'white', backgroundColor: mode === 'light' ? 'white' : 'black'}} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    This is a text utility application which you can make use of to manipulate texts. You can paste any text in the text-area in the home page and convert the whole text into upper/lower case, remove extra spaces in the text, You can also use the "To Speech" function to hear the text!
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
