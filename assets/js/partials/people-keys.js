/* Goes with people-keys.html */

const people = ['Seb Gorka', 'Antonio Scaramucci', 'Victor Olaf'];

// returns array of <li>
// this is compatible with being directly
// put inside of a <ul> tag :)
const peopleList = people.map((person, i) =>
	<li key={'person__' + i}>{person}</li>
); // key="person__number"

ReactDOM.render(
	<ul>{peopleList}</ul>,
	document.getElementById('people-keys')
);