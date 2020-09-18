import React from 'react'
import GameContext from '../../GameContext'
import './TileSelector.css'
import useHover from '../../hooks';

const TileSelector = (props) => {

  const [ ref, hovered ] = useHover();
  
  const numbers = [4, 16, 36];
  
  return <GameContext.Consumer> 
          {
            ({numTiles, handleNumTileChange}) => {
                const dropdown = (
                  <div className='tileSelectorContent' >
                      {numbers.map((x,i) => 
                        <div className='number' onClick={ () => handleNumTileChange(x) } key={i} >{x}</div>
                        )}
                    </div>
              );
              
              return (
                <div className='tileSelector'>
                  <div>Number of Tiles</div>
                  <div className='tileSelectorDropdown' ref={ref}>
                    {numTiles}
                    {hovered ? dropdown : null}
                  </div>
                </div>
              )
            }
          }
          </GameContext.Consumer>
}

export default TileSelector
