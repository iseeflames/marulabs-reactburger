import React,{useState} from 'react'
import "./Meat.css"
import "../Components.css"

export default function Meat() {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }
  return (
    <div onClick={removeComponent} className="meat-container filling">
      <p className="meat-name">{props.name}</p>
    </div>
  );
}
