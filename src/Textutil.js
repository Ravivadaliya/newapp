import React,{ useState } from "react";

export default function Textutil(props) {
  const change = (e) => {
    settext(e.target.value);
  };
  const handclick = ()=>{
    let newtext = text.toUpperCase();
    settext(newtext);
  }

  const [text, settext] = useState("");
  return (
    <div>
    <h1>{props.heading} </h1>
    <div class="form-group">
      <textarea
        class="form-control"
        value={text}
        onChange={change}
        id="mybox"
        rows="12"
      ></textarea>
    </div>
    
    <button className="btn btn-primary my-3" onClick={handclick}>
        Convert uppercase
      </button>
  </div>
  );
}
