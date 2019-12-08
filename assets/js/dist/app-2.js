/* Goes with app-2.html */
const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: green
    };
    this.changeColor = this.changeColor.bind(this); // need for the right 'this'
  }

  changeColor() {
    // evaluate state.color
    // if green = true, set it to yellow
    // if green = false, set it to green
    // recall: statement ? (if true) : (if false)
    const newColor = this.state.color == green ? yellow : green;
    this.setState({
      color: newColor
    });
  }

  render() {
    return React.createElement("div", {
      style: {
        background: this.state.color
      }
    }, React.createElement("h1", null, "Change my color!"), React.createElement("button", {
      onClick: this.changeColor
    }, "Change color here!"));
  }

}

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('app-2'));