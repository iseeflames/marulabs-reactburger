import React,{useState} from 'react'
import "./Cheese.css";
import "../Components.css"

export default function Cheese() {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }
  return (<div onClick={removeComponent} className="cheese-container filling">
    <p>Cheese</p>
  </div>);
}
