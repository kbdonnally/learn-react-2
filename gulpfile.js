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

// ----------------------------------------------------

const babelCompile = (done) => {
	gulp.src('babel/*.js')
		.pipe(babel({
			presets: ["@babel/preset-react"]
		}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('js'))
	done();
};

const babelClean = (done) => {
	gulp.src('js/*.js', {allowEmpty: true})
		.pipe(clean());
	done();
};

gulp.task('babel:compile', babelCompile);

gulp.task('babel:watch', () => {
	return gulp.watch('babel/*.js', babelCompile)
});

gulp.task('babel:clean', babelClean);

// gulp babel
gulp.task('babel', gulp.series('babel:clean', 'babel:compile', 'babel:watch'));

// Explanation: put all Babel files into 'assets/js/babel/*.js'
// Then it'll concatenate everything and minify