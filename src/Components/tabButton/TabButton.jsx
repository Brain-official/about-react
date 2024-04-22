import React from 'react'

// The children prop enables React to read ouput in-between Component tags <TabButton>Component</TabButton>

function TabButton({children, onSelect, isSelected}) {




  return (
    <li>
        <button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button>  
    </li>
  )
}

export default TabButton



