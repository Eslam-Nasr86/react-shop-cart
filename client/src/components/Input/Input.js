import React from 'react'

export default function Input({label, type,  name, onchange}) {
  return (
    <div>


<label>{label}</label>
            <input type={type} required name={name}  onChange={onchange}/>   
    </div>
  )
}
