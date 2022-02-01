import React from 'react'
import "./Tomato.css"

export default function Tomato(props) {
  return (
    <div className="tomato-container">
      <p className="tomato-name">{props.name}</p>
    </div>
  )
}
