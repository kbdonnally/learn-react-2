/* Goes with parent-child.html */

import { Child } from './Child.js';

class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: 'Fred' };
		this.changeName = this.changeName.bind(this); // so we're calling this inside render() later
	}

	changeName(newName) {
		this.setState({
			name: newName
		});
	}

	render() {
		return <Child name={this.state.name} onChange={this.changeName} />;
	}
}

ReactDOM.render(
	<Parent />,
	document.getElementById('parent-child')
);