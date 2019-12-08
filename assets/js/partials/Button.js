export class Button extends React.Component {
	render() {
		return (
			// if light, choose light button; if dark, choose dark button
			// onClick calls the event handler
			// use the *name* of the handler function (name of prop, not name of function)
			<button
				className={ this.props.light ? 'light-button' : 'dark-button'}
				onClick={this.props.onClick}>
				Refresh
			</button> // hello
		);
	}
}