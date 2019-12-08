/* Goes with coin-toss.html */

function coinToss() {
	return Math.random() < .5 ? 'heads' : 'tails';
}

const pics = {
	cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
	dog: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
}

let img;

if (coinToss() == 'heads') {
	img = <img src={pics.cat} height="200px" />
} else {
	img = <img src={pics.dog} height="200px" />
}

ReactDOM.render(
	img,
	document.getElementById('coin-toss')
);