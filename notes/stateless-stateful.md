# Stateless Children, Stateful Parent

1. Stateful component class defines a function that calls this.setState. (`Parent.js`, 15-19)
	- Full function:

```js
changeName(newName) {
    this.setState({
      name: newName
    });
  }
```

2. Stateful component passes that function down to stateless component. (`Parent.js`, 24)
	- Line in question: `<Child onChange={this.changeName} />`
	- Passes it through by making it trigger every time onChange is called
	- To be clear, `changeName` is the passed-down function
3. Stateless component class defines a function that calls the passed-down function, which takes an *event object* as an argument. (`Child.js`, 10-13)
	- Full function:

```js
handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
}
```

4. The stateless component class uses this new function as an *event handler* (`Child.js`, 20)
	- Code coming from: `<select ... onChange={this.handleChange} >`
5. When an event is detected, the parent's state updates (say, a user selects a new dropdown menu item).
6. Stateful component class passes down its state, distinct from the ability to *change* its state, to a different stateless component. (`Parent.js`, 25)
7. Stateless component class receives the state and displays it. (`Sibling.js`, 5-10)
8. An instance of the stateful component is rendered.
	- 1 stateless child component displays the state
	- 1 stateless child component displays a way to change the [name, or whatever]
	- (`Parent.js`)

## In conclusion:

- Stateless props can interact with state; they just can't ever set it for themselves
- I need to understand event handlers better!