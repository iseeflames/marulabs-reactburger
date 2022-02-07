import React,{useState} from 'react'
import "./Lettuce.css"
import "../Components.css"

export default function Lettuce() {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }

  return (<div onClick={removeComponent} className="lettuce-container filling">
    <p className="">Lettuce</p>
  </div>);
}
