import React from 'react'
import './TileSelector.css'
import useHover from '../../hooks';

const TileSelector = (props) => {

  const { ref, hovered } = useHover();
  const numbers = [4, 16, 36];
  const dropdown = hovered ? (
        <div className='tileSelectorContent' >
          {
            numbers.map((x,i) => <div className='number' onClick={ () => props.handleNumTileChange(x) } key={i} >x</div>)
          }
        </div>
  ) : null;

  return (
    <div className='tileSelector'>
      <div>Number of Tiles</div>
      <div className='tileSelectorDropdown' ref={ ref }>
        {props.numTiles}
        {dropdown}
      </div>
    </div>
  )
}

export default TileSelector
