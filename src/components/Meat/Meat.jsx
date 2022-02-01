import React from 'react'
import "./Meat.css"

export default function Meat(props) {
  return (
    <div className="meat-container">
      <p className="meat-name">{props.name}</p>
    </div>
  )
}
