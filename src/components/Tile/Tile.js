import React from 'react'

import './Tile.css'

const Tile = (props) => {
  var dynamicColor = props.selected || props.matched ? { backgroundColor: props.color } : null;
  
  return (
    <div className='Tile' style={dynamicColor}>
      {
        props.selected || props.matched ? <svg /> : null
      }
    </div>
  )
}

export default Tile
