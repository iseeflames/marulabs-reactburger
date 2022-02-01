import React,{useState} from 'react'
import "./Lettuce.css"


export default function Lettuce() {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }

  return (<div onClick={removeComponent} className="lettuce-container">
    <p className="">Lettuce</p>
  </div>);
}
