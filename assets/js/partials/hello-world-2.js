/* Hello World II: */
// Using components with Codecademy's tutorials

if (document.getElementById('hello-world-2')) {
	class MyComponentClass extends React.Component {
		render() {
			return <h1>Hello, world!</h1>
		}
	};

	ReactDOM.render(
		<MyComponentClass />,
		document.getElementById('hello-world-2')
	);
}