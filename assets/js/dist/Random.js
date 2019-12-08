/* Goes with random-color-picker.html */

/* import { Button } from './Button'; */
class Button extends React.Component {
  render() {
    return (// if light, choose light button; if dark, choose dark button
      // onClick calls the event handler
      // use the *name* of the handler function (name of prop, not name of function)
      React.createElement("button", {
        className: this.props.light ? 'light-button' : 'dark-button',
        onClick: this.props.onClick
      }, "Refresh") // hello

    );
  }

}

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [255, 167, 231]
    };
    this.handleClick = this.handleClick.bind(this); // because we use 'this' here later
  }
  /* Lifecycle functions: */


  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }
  /* End lifecycle functions */


  formatColor(ary) {
    return 'rgb(' + ary.join(',') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3; // if it's more or less than halfway dark 
    // will return 'true' or 'false'
    // reducer functions return a single value from a set
    // this will add up all the numbers and see if it's
    // less than 1/2 the total value it could be
    // if true, color is dark
    // if false, color is light
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];

    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256)); // select a random number between 0 and 255
      // do this 3 times (0, 1, 2 are indexes)
    }

    return random;
  }

  handleClick() {
    this.setState({
      color: this.chooseColor()
    }); // this is why we had to bind in the constructor
    // 'this' gets called & wouldn't know what 'this' otherwise
  }

  render() {
    return (// if isLight() is true, the bg color is dark with white text
      // if isLight() is false, the bg color is light with black text
      // I do not like how they named these, but alas
      React.createElement("div", null, React.createElement("h1", null, "Hello!"), React.createElement("h1", {
        className: this.isLight() ? 'white' : 'black'
      }, "Your color is ", this.formatColor(this.state.color)), React.createElement(Button, {
        light: this.isLight(),
        onClick: this.handleClick
      }))
    );
  }

}

ReactDOM.render(React.createElement(Random, null), document.getElementById('random-color-picker'));