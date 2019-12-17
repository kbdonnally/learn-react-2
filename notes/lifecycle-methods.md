# Lifecycle Methods

## 1. What's a Lifecycle Method?

- **Lifecycle methods** get called at certain finite moments in a component's life
- Examples:
	1. LM that gets called right before a component renders for the first time
	2. LM that gets called after a component renders, *except* for the first time it renders
- Overall, you can attach LMs to lots of different places in a component's life, which has "powerful implications"
- In the unit, we're walking through each lifecycle method.

***

## 2. Mounting Lifecycle Methods

- 3 categories of lifecycle methods:
	1. **mounting**
	2. **updating**
	3. **unmounting**

This lesson focuses on **mounting** lifecycle methods.

**Mounting** is when a component renders for the first time. This, consequently, is when **mounting lifecycle methods** are called.

3 mounting lifecycle methods:

1. `componentWillMount`
2. `render`
3. `componentDidMount`

"When a component mounts, it automaticalky calls these three methods, in order."