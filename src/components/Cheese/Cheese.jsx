import React,{useState} from 'react'
import "./Cheese.css";

export default function Cheese() {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }
  return (<div onClick={removeComponent} className="cheese-container">
    <p>Cheese</p>
  </div>);
}
