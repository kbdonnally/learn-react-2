/* Goes with app-2.html */

const green  = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { color: green };
		this.changeColor = this.changeColor.bind(this); // need for the right 'this'
	}

	changeColor() {
		// evaluate state.color
		// if green = true, set it to yellow
		// if green = false, set it to green
		// recall: statement ? (if true) : (if false)
		const newColor = this.state.color == green ? yellow : green;
		this.setState({ color: newColor });
	}

	render() {
		return (
			<div style={{background: this.state.color}}>
				<h1>Change my color!</h1>
				<button onClick={this.changeColor}>
					Change color here!
				</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Toggle />,
	document.getElementById('app-2')
);