import React,{useState} from 'react'
import "./Tomato.css"

export default function Tomato(props) {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }
  return (
    <div onClick={removeComponent} className="tomato-container">
      <p className="tomato-name">{props.name}</p>
    </div>
  );
}
