// JSX Sandbox to get used to it
// Tic Tac Toe Game
// Typing it up from my notes in hopes of understanding it better
//import React from 'react';
//import ReactDOM from 'react-dom';
// SQUARE //
function Square(props) {
  return React.createElement("button", {
    className: "square",
    onClick: props.onClick
  });
} // end Square
// BOARD //


class Board extends React.Component {
  // method 1: render Square
  renderSquare(i) {
    return React.createElement(Square, {
      value: this.props.squares[i],
      onClick: () => this.props.onClick(i)
    });
  } // method 2: render


  render() {
    return React.createElement("div", null, React.createElement("div", {
      className: "board-row"
    }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), React.createElement("div", {
      className: "board-row"
    }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), React.createElement("div", {
      className: "board-row"
    }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
  }

} // end Board
// GAME //


class Game extends React.Component {
  // constructor for object
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  } // what to do if click a tile


  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // 1 indexed step number

    const current = history[history.length - 1]; // last item in row

    const squares = current.squares.slice(); // slice() = beginning to end, shallow copy

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'; // X by default, O if false

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  } // jump to given step, adjust whether X is next played


  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return React.createElement("li", {
        key: move
      }, React.createElement("button", {
        onClick: () => this.jumpTo(move)
      }, desc));
    }); // decide a winner

    let status;

    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
    } // what gets rendered


    return React.createElement("div", {
      className: "game"
    }, React.createElement("div", {
      className: "game-board"
    }, React.createElement(Board, {
      squares: current.squares,
      onClick: i => this.handleClick(i)
    })), React.createElement("div", {
      className: "game-info"
    }, React.createElement("div", null, status), React.createElement("ol", null, moves)));
  }

} // end Game
// ----------------------------------------------------------------


ReactDOM.render(React.createElement(Game, null), document.getElementById("root"));

function calculateWinner(squares) {
  // all the ways to win
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}