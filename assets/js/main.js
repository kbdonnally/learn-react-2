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

ReactDOM.render(React.createElement(Mood, null), document.getElementById('app-1'));
/* Hello! */
/* Hello World II: */
// Using components with Codecademy's tutorials
//import React from 'react';
//import ReactDOM from 'react-dom';
if (document.getElementById('hello-world-2')) {
  class MyComponentClass extends React.Component {
    render() {
      return React.createElement("h1", null, "Hello, world!");
    }

  }

  ;
  ReactDOM.render(React.createElement(MyComponentClass, null), document.getElementById('hello-world-2'));
}