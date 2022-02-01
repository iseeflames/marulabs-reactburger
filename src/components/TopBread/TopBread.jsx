import React,{useState} from 'react'
import "./TopBread.css"

export default function TopBread() {
  const [isVisible, setIsVisble] = useState(true);

  const removeComponent = () =>{
    setIsVisble(false);
  };

  if(!isVisible){

    return "";

    }

  return (
    <div onClick={removeComponent} className="topbread-container">
      
    </div>
  );
}
