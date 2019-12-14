/* Goes with user-input.html */

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userInput: '' };
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	// event handler
	handleUserInput(e) {
		this.setState({
			userInput: e.target.value
		});
	} // bound this to the specific instance of Input

	render() {
		return (
			<div>
				<input
					type="text"
					onChange={this.handleUserInput}
					value={this.state.userInput} />
				<h1>{this.state.userInput}</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<Input />,
	document.getElementById('user-input')
);