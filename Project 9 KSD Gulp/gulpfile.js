var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
    gulp = require('gulp'),
    pug = require('gulp-pug');
    browserSync = require('browser-sync'),


    // Styles
gulp.task('styles', function() {
  return sass('src/sass/style.scss', { noCache: true, style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('static/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('static/styles'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'static'
        }
    });
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    // .pipe(concat('main.js'))
    .pipe(gulp.dest('static/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('static/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('static/images'))
});

//PUG
gulp.task('pug', function() {
    return gulp.src('src/templates/**/*.pug')
        .pipe(pug({pretty: true})) // pip to jade plugin
        .pipe(gulp.dest('static/')); // tell gulp our output folder
});


// Default task
gulp.task('default', function() {
  gulp.start('watch','styles', 'scripts', 'images', 'pug');
});

gulp.task('clear', function() {
    return cache.clearAll();
});

// Watch
gulp.task('watch',['browser-sync'], function() {

  // Watch .scss files
  gulp.watch('src/sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);

  //Watch jade files
  //gulp.watch('src/templates/**/*.jade', ['jade']);
 //Watch jade files
  gulp.watch('src/templates/**/*.pug', ['pug']);

  gulp.watch('static/**/*', browserSync.reload);

});
