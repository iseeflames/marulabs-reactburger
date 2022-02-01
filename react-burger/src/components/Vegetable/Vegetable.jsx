import React from 'react'
import "./Vegetable.css"

export default function Vegetable(props) {
  return (
    <div className="vegetable-container">
      <p className="vegetable-name">props.name</p>
    </div>
  )
}
