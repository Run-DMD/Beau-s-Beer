//putting all the modules that are required into variables

//main thing
var gulp = require('gulp');
//compile our sass
var sass = require('gulp-sass');
//concat our sass
var concat = require('gulp-concat');
//define a new babel at the top for es6
var babel = require('gulp-babel');

var autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync').create();

const reload = browserSync.reload;


//styles task, give it a name, run a callback function

gulp.task('styles', function(){
	//in the style folder, any folder (**) and any files (*) with a .scss extension
	//returns it (convention in gulp)
	//give a path for the files we want (source)
	return gulp.src('./dev/styles/**/*.scss')
		//content is being passed in the sass function, that will then compile it "piping it"
		//on error trigger log
		.pipe(sass().on('error', sass.logError))

		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		//concatenate all files and put it in one css file. Creates the file.
		.pipe(concat('style.css'))
		//put the folder in the "here/public/styles" folder
		.pipe(gulp.dest('./public/styles/'))

		.pipe(reload({stream: true}));
});

//when something is changed or modified on the files that are watched

gulp.task('watch', function(){
	//find any sass files and when they are changed we want to do something
	gulp.watch('./dev/styles/**/*.scss', ['styles']);
	gulp.watch('./dev/scripts/script.js', ['scripts']);
	gulp.watch('./public/*.html', reload);
});

gulp.task('scripts', function(){
	//gathers up a set of files (or one file) source
	return gulp.src('./dev/scripts/script.js')
		//piping it through the babel function
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(gulp.dest('./public/scripts/'))
		.pipe(reload({stream: true}));
});

gulp.task('default', function () {
	return gulp.src('src/app.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: './public'  
  })
});

gulp.task('default', ['browser-sync', 'styles', 'scripts', 'watch']);

