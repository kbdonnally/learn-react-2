import { Video } from './Video.js';
import { Menu } from './Menu.js';

const VIDEOS = {
	fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
	slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
	cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
	eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { src: VIDEOS.fast };
		this.chooseVideo = this.chooseVideo.bind(this);
		// is that done for all functions declared and used in the same file? Still confused about it
	}

	chooseVideo(newVideo) {
		this.setState({
			src: VIDEOS[newVideo] // can call object by key
		});
	}

	render() {
		return (
			// can use 'chooseVideo' as attribute b/c they're arbitrary
			// now Menu can access it as a prop, I think
			// Yes - handleClick passes it directly to chooseVideo
			<div>
				<h1>Video Player</h1>
				<Menu chooseVideo={this.chooseVideo} />
				<Video src={this.state.src} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('video-player')
);