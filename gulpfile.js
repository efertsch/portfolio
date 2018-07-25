// General Gulp Task Structure
// gulp.task('sass', function(){
//   return gulp.src('source-files')
//     .pipe(sass()) // Using gulp-sass
//     .pipe(gulp.dest('destination'))
// });

//Require plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence');


//Compile all Sass files in the root and all child directories to css
//Update css on page reload
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//Watch all Sass files for changes and update automatically
//Load sass and browsersync before beginning watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html');
  gulp.watch('app/js/**/*.js');
});

//Initialize a server in the root directory
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

//Find all html files in app, look for scripts and concatinate with useref plugin
//Minify js with uglify plugin
//Concat and minify css with cssnano plugin
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

//Optimize and minify images with png, jpg, gif, svg ext.
//Cache minified images -- expensive to do repeatedly
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('dist/images'))
})

//Move pre-optimized fonts to dist folder
gulp.task('fonts', function(){
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

//Clean up folders and files when they are copied or moved
gulp.task('clean:dist',function(){
  return del.sync('dist');
})

//Clear cache off of local system
gulp.task('cache:clear', function(callback){
  return cache.clearAll(callback);
})

//Combine all tasks and run on build
gulp.task('build', function(callback){
  runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'],
  callback
  )
})

//Default task allows you to just type 'gulp' to run 
gulp.task('default', function(callback){
  runSequence(['sass', 'browserSync', 'Watch'],
  callback
  )
})