export class Child extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this) // bound to this instance of Child
	}

	handleChange(e) {
		// NB: 'value' is an attribute we gave to each option
		const name = e.target.value;
		this.props.onChange(name); // run this code when clicked
	}

	render() {
		// where are we getting the props from?
		return (
			<div>
				<h1>Hey, my name is {this.props.name}</h1>
				<select 
					id="great-names"
					onChange={this.handleChange} >
					<option value="Fred">
						Fred
					</option>
					<option value="Seb">
						Seb
					</option>
					<option value="Harvey">
						Harvey
					</option>
				</select>
			</div>
		);
	}
} // end <Child />