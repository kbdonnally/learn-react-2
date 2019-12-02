// gulpfile.js 
const gulp   = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

// ---------------------------------------------------

const js = () => {
	return gulp.src('./assets/js/partials/*.js')
		.pipe(concat('main.js'))
		.pipe(minify({
			ext: { min: '.min.js' }
		}))
		.pipe(gulp.dest('./assets/js'));
};

gulp.task('js', js);