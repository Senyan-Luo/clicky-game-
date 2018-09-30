import React, { Component } from "react";

const initialState = {
  tiles: [
    {
      //color: '#000',
      color:"#f9d5d5",
      clicked: false,
      id: 1,
    },
    {
      //color: '#111',
      color:"#ff3333",
      clicked: false,
      id: 2,
    },
    {
      //color: '#222',
      color:"#fef65b",
      clicked: false,
      id: 3,
    },
    {
      //color: '#222',
      color:"#c4c1ea",
      clicked: false,
      id: 4,
    },
    {
      //color: '#222',
      color:"#96e1f0",
      clicked: false,
      id: 5,
    },
    {
      //color: '#222',
      color:"#574d47",
      clicked: false,
      id: 6,
    },
    {
      //color: '#222',
      color:"#14182b",
      clicked: false,
      id: 7,
    },
    {
      //color: '#222',
      color:"#602147",
      clicked: false,
      id: 8,
    }
  ],
  score: 0,
  topScore: 0,
}

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  resetGame = () => {
    const tiles = this.state.tiles.map(tile => ({ ...tile, clicked: false }))
    console.log('TILES', tiles)
    this.setState({ score: 0, tiles })
    console.log('NEW STATE', this.state)
  }

  handleClick = id => {
    let clickedTile = this.state.tiles.find(tile => tile.id === id)

    if (clickedTile.clicked) {
      this.resetGame()
    } else {
      clickedTile.clicked = true
      let newTiles = this.state.tiles.filter(tile => tile.id !== id)
      newTiles.push(clickedTile)
      console.log('NEW TILES', newTiles)

      this.setState({
        ...this.state,
        score: this.state.score + 1,
        topScore: this.state.score === this.state.topScore
          ? this.state.topScore + 1
          : this.state.topScore,
        tiles: newTiles
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Score: { this.state.score }</h1>
        <h1>Top Score: { this.state.topScore }</h1>
        {
          this.state.tiles.map(tile => ( // TODO: Shuffle these around! Hint: .sort()
            <div
              key={ tile.id }
              style={{
                display: 'inline-block',
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 100,
                margin: '1em',
                backgroundColor: tile.color
              }}
              onClick={ () => this.handleClick(tile.id) }
            >
              CARD { tile.clicked ? "" : null }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Game;