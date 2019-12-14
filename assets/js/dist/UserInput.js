/* Goes with user-input.html */
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  } // event handler


  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  } // bound this to the specific instance of Input


  render() {
    return React.createElement("div", null, React.createElement("input", {
      type: "text",
      onChange: this.handleUserInput,
      value: this.state.userInput
    }), React.createElement("h1", null, this.state.userInput));
  }

}

ReactDOM.render(React.createElement(Input, null), document.getElementById('user-input'));