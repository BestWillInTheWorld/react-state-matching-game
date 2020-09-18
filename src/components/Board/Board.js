import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  props.tiles.forEach(x => console.log({...x}) );

  return (
    <div className='Board' style={gridConfig}>      
    {
      props.tiles.map(tile => 
          <Tile props={{...tile}} />
      )
    }
    </div>
  )
}

export default Board
