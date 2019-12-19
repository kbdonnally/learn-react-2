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

## 3. componentWillMount

- Fires right *before* `render`, the first time
- If you need something to happen only the *first time* a component renders, use this method
	- E.g., probably, pop-up ads offering subscription options etc. that only pop up once

## 4. render

- You know this one.

## 5. componentDidMount

- Gets called right after `render` is finished
- Re. AJAX:

> If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call.

What else to use it for:

1. Good place to connect React app to external applications, like web APIs or JavaScript frameworks
2. Set timers, with `setTimeout` or `setInterval`

***

# Updating Lifecycle Methods

## 1. Updating Lifecycle Methods

Two categories to discuss: **updating** and **unmounting** lifecycle methods.

**Updating:** the first time a component renders, it doesn't update; instead, a component updates every time it renders, *starting with the second render*.

**Five Updating Lifecycle Methods:**

1. `componentWillReceiveProps`
2. `shouldComponentUpdate`
3. `componentWillUpdate`
4. `render`
5. `componentDidUpdate`

Quote:

> Whenever a component instance *updates*, it automatically calls all five of these methods, in order.

^That seems important!

### 1. componentWillReceiveProps

- When component instance updates, componentWillReceiveProps gets called before rendering starts
- Only gets called if the component will, indeed, receive props

```js
// componentWillReceiveProps will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
```