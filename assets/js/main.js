/* Goes with app.html */
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 'good'
    }; // using 'this' in event handler so must include bind statement

    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({
      mood: newMood
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("h1", null, "I'm feeling ", this.state.mood), React.createElement("button", {
      onClick: this.toggleMood
    }, "Click me!"));
  }

}
/* ReactDOM.render(
	<Mood />,
	document.getElementById('app-1')
); */
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
/* Hello World II: */
// Using components with Codecademy's tutorials
//import React from 'react';
//import ReactDOM from 'react-dom';

/* if (document.getElementById('hello-world-2')) {
	class MyComponentClass extends React.Component {
		render() {
			return <h1>Hello, world!</h1>;
		}
	};

	ReactDOM.render(
		<MyComponentClass />,
		document.getElementById('hello-world-2')
	);
} */