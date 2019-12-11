export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); // bound to this instance of Child
  }

  handleChange(e) {
    // NB: 'value' is an attribute we gave to each option
    const name = e.target.value;
    this.props.onChange(name); // run this code when clicked

    console.log(this.props);
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

/*

What happens:

1. <select> gets clicked on, which triggers onChange (reserved phrase for forms)
2. In Child: this.handleChange is called
	- Identifies e.target.value as the name;
   	- Feeds the name as this.props.onChange(name)
3. In the Parent, the call to onChange triggers this.changeName(name) with the same 'name' variable passed through;
   updates the name
   	- This is how the actual name gets changed in state for Parent
   	- The changed state is now accessible in Child as a prop
4. State is updated in Parent, used to render `name={this.state.name}` in Child
5. This means Child can now use {this.props.name}, because now it has a prop named 'name'
	- This is arbitrary; it could be named 'pudding' or something; it's for consistency

- Clicked on thing
- Child function called that uses the raw data from the interaction
- Child function calls Parent function
- Parent function changes state
- Parent function passes the state values back to Child instances as a prop

- Child processes data info and sends it to parent, parent does the actual updating of its state

*/