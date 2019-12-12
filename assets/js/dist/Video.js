export class Video extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("video", {
      controls: true,
      autostart: true,
      autoPlay: true,
      muted: true,
      src: this.props.src
    })) // getting src from a prop that is passed in
    ;
  }

}