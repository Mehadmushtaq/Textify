import React, { useState } from "react";

export default function TextBox(props) {
    const HandleUpperCase=()=>{
         let newtext = text.toUpperCase();
         setText(newtext);
    }
    const HandleLowerCase=()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
   }
    const HandleCopy=()=>{
        var paragraph = document.getElementById("textBox");
        paragraph.select();
        navigator.clipboard.writeText(paragraph.value);
    }

    const HandleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');

  return (
    <div>
      <div className="container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label my-3">
          {props.title}                     {/*props */}
        </label>
        <textarea
          className="form-control" id="textBox" rows="10" value={text} onChange={HandleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={HandleUpperCase} >Upper Case</button>
        <button className="btn btn-primary my-3 mx-2" onClick={HandleLowerCase} >Lower Case</button>
        <button className="btn btn-primary my-3" onClick={HandleCopy} >copy</button>

        <div>
            <p><b>Text Summary :</b> {text.split(" ").length} words {text.length} characters </p>
        </div>


      </div>
    </div>
  );
}
