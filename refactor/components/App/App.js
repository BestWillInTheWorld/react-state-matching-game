import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import GameContext from '../../GameContext'
import { createTiles, indexOfSelected  } from '../../misc/utils';

import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    };
  }

  startGame(numTiles){
    this.setState(state => (
    {
      playing: true, 
      toBeCleared: null, 
      previousTileIndex: null,
      tiles: createTiles(state.numTiles, (id, color) => this.handleTileClicked(id, color)),
    }));
  }

  handleTileClicked(id, color) {
    this.setState( (state) =>
    {
      const tiles = state.tiles;
      var toBeCleared = state.toBeCleared;
      const selectedTileIndex = indexOfSelected(tiles, id, color);
      var previousTileIndex = state.previousTileIndex;

      toBeCleared?.forEach(x => tiles[x].selected = false);
      toBeCleared = null;

      if(selectedTileIndex) tiles[selectedTileIndex].selected = true;
      
      if (previousTileIndex !== null) {
        var previousTile = tiles[previousTileIndex];
        var selectedTile = tiles[selectedTileIndex];

        if (previousTile?.id !== selectedTile?.id && previousTile.color === color) {
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;
        } 
        else {
          toBeCleared = [previousTileIndex, selectedTileIndex];
          previousTileIndex = null;
        }
      }
      else { 
        previousTileIndex = selectedTileIndex 
      }

      return { 
          tiles: tiles,
          toBeCleared: toBeCleared,
          previousTileIndex: previousTileIndex,
        };
    })
  }

  handleNumTileChange(num) {
    this.setState({
      numTiles: num,
      playing: false,
      tiles: [],
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Turbo-Matcher
        </header>
        <GameContext.Provider value={this.state}>
          <OptionsPanel 
              playing={this.state.playing} 
              numTiles={this.state.numTiles} 
              startGame={() => this.startGame()}
              handleNumTileChange={(num) => this.handleNumTileChange(num)}
              />
          <Board 
              numTiles={this.state.numTiles} 
              tiles={this.state.tiles} 
              />
        </GameContext.Provider>
      </div>
    );
  }
}

export default App;
