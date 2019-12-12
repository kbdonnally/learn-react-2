export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); // where is this needed?
  }

  handleClick(e) {
    text = e.target.value;
    this.props.chooseVideo(text); // chooseVideo must be passed in in App.js
  }

  render() {
    return React.createElement("form", {
      onClick: this.handleClick
    }, React.createElement("input", {
      type: "radio",
      name: "src",
      value: "fast"
    }), " fast", React.createElement("input", {
      type: "radio",
      name: "src",
      value: "slow"
    }), " slow", React.createElement("input", {
      type: "radio",
      name: "src",
      value: "cute"
    }), " cute", React.createElement("input", {
      type: "radio",
      name: "src",
      value: "eek"
    }), " eek");
  }

}