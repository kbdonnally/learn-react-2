export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); // bound to this instance of Child
  }

  handleChange(e) {
    // NB: 'value' is an attribute we gave to each option
    const name = e.target.value;
    this.props.onChange(name); // run this code when clicked
  }

  render() {
    // where are we getting the props from?
    return React.createElement("div", null, React.createElement("h1", null, "Hey, my name is ", this.props.name), React.createElement("select", {
      id: "great-names",
      onChange: this.handleChange
    }, React.createElement("option", {
      value: "Fred"
    }, "Fred"), React.createElement("option", {
      value: "Seb"
    }, "Seb"), React.createElement("option", {
      value: "Harvey"
    }, "Harvey")));
  }

} // end <Child />