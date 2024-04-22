import React from 'react'
import "./core.css"



function CoreConcept({image, title, description}) {  //destructuring
  return (

    <li>
        <img src={image} alt='' />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
   
  )
  
}

export default CoreConcept



