import React,{useState}from 'react'

export default function Textform(props) {
    const handleUpClick=()=> {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Text is Converted to Uppercase!", "success");
    }
    const handleloClick=()=> {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Text is Converted to Lowercase!", "success");
    }
    const handleClearClick=()=> {
        let newText='';
        setText(newText);
        props.showAlert(" Text is Cleared!", "success");
    }
    const handleCopyClick=()=> {
        var text=document.getElementById("my box");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copyed to Clipbord!", "success");
    }
    const handleExtraSpace=()=> {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" All Extraspaces removed From our Text!", "success");
    }
    const handleOnChange=(event)=> {
        console.log("on change");
        setText(event.target.value);
    }
    
    
    const [text, setText] = useState('');
    return (
       
        <div className="container " style={{color: props.mode==='light'?'black':'white'}}>
            <h4 className='mb-4'>{props.heading}</h4>
            <div className="mb-3" >
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#101010',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="my box" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Conver to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to clipbord</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            
            <div className="container my-2">
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} charactors</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Nothing to preview'}</p>
            </div>
        </div>
    )
}
