import React,{useState} from 'react'
import "./Meat.css"

export default function Meat(props) {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }
  return (
    <div onClick={removeComponent} className="meat-container">
      <p className="meat-name">{props.name}</p>
    </div>
  );
}
