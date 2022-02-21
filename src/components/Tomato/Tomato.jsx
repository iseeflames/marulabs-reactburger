import React,{useState} from 'react'
import "./Tomato.css"
import "../Components.css"

export default function Tomato(props) {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }
  return (
    <div onClick={removeComponent} className="tomato-container filling">
      <p className="tomato-name">{props.name}</p>
    </div>
  );
}
