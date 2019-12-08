---
title: Notes
layout: react-layout
permalink: /notes/
---

# Notes & Brain Dumps

- How to get all of the React files *compiled*, but without them running over each other?	
	- Right now it appears that only 1 function call to `ReactDOM` can be made at a time per page, so the first call is the only one that gets rendered

- Gulp's tasks:
	1. Compile each file from Babel into clean JS
	2. Inject the result of each file into new JS file

*All taken care of!*

***

Basic formula:

1. Things that go in the constructor
2. Things that go outside of the constructor

```js
class ComponentName extends React.Component {
	constructor(props) {
		super(props);
		this.state {
			name: 'value'
		}
		this.handleEvent = this.handleEvent.bind(this);
	}

	myMethod() {
		/* does stuff */
	}

	render() {
		return /* whatever */;
	}
}
```