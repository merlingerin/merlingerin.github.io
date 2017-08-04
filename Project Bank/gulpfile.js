var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');


//*******CSS*******//
gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});


//******BrowserSync*******//
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
});


gulp.task('prefix', () =>
    gulp.src('app/css/styles.min.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

//*********CONCAT JS***********//
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

//*****OPTIMIZED IMAGES******//
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
      // Setting interlaced to true
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

//*******COPY FONTS********//
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})


//******CLEAN DIST**********//
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

//******DEFAULT TASK********//
gulp.task('default', function() {
  gulp.start('watch','sass', 'browserSync', 'useref', 'fonts', 'images');
});


//*********WATCH**********//
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  //Reload the browser whenever HTML or JS files changed
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/images/**/*.+(png|jpg|jpeg|gif|svg)', browserSync.reload);

})

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'prefix', 'images', 'fonts'],
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})
