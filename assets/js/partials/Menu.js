export class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this); // where is this needed?
	}

	handleClick(e) {
		text = e.target.value;
		this.props.chooseVideo(text);
		// chooseVideo must be passed in in App.js
	}

	render() {
		return (
			<form onClick={this.handleClick}>
				<input type="radio" name="src" value="fast" /> fast
				<input type="radio" name="src" value="slow" /> slow
				<input type="radio" name="src" value="cute" /> cute
				<input type="radio" name="src" value="eek" /> eek
			</form>
		);
	}
}