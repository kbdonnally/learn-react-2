/* Goes with people-keys.html */
const people = ['Seb Gorka', 'Antonio Scaramucci', 'Victor Olaf']; // returns array of <li>
// this is compatible with being directly
// put inside of a <ul> tag :)

const peopleList = people.map((person, i) => React.createElement("li", {
  key: 'person__' + i
}, person)); // key="person__number"

ReactDOM.render(React.createElement("ul", null, peopleList), document.getElementById('people-keys'));