import React from 'react'

import './Tile.css'

const Tile = (props) => {
  var dynamicColor = props.selected || props.matched ? { backgroundColor: props.color } : null;
  console.debug(props.handleTileClicked);
  return (
    <div className='Tile' style={dynamicColor} onClick={ () => props.handleTileClicked(props.id, props.color) }>
      {
        props.selected || props.matched ? <props.svg /> : null
      }
    </div>
  )
}

export default Tile
