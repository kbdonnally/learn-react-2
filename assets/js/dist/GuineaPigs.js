/* Goes with guinea-pigs.html */

/* Goes with guinea-pigs.html */
export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src; // gets passed in render of container, = current GP

    return React.createElement("div", null, React.createElement("h1", null, "Cute Guinea Pigs"), React.createElement("img", {
      src: src
    }));
  }

}