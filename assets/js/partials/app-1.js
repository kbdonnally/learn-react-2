/* Goes with app.html */

class Mood extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mood: 'good'
		}
		// using 'this' in event handler so must include bind statement
		this.toggleMood = this.toggleMood.bind(this); 
	}

	toggleMood() {
		const newMood = this.state.mood == 'good' ? 'bad' : 'good';
		this.setState({ mood: newMood });
	}

	render() {
		return (
			<div>
				<h1>I'm feeling {this.state.mood}</h1>
				<button onClick={this.toggleMood}>
					Click me!
				</button>
			</div>
		);
	}
}

/* ReactDOM.render(
	<Mood />,
	document.getElementById('app-1')
); */