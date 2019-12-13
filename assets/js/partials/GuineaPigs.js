/* Goes with guinea-pigs.html */

/* Goes with guinea-pigs.html */

export class GuineaPigs extends React.Component {
	render() {
		let src = this.props.src; // gets passed in render of container, = current GP
		return (
			<div>
				<h1>Cute Guinea Pigs</h1>
				<img src={src} />
			</div>
		);
	}
}