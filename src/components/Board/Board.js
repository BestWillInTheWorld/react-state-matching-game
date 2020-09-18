import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  return (
    <div className='Board' style={gridConfig}>      
    {
      props.tiles.map((tile, index) => 
          <Tile props={{...tile}} key={index} />
      )
    }
    </div>
  )
}

export default Board
