var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');  
var babel = require('gulp-babel');                           

gulp.task('dev', function(){
    return gulp.src(['./src/main.jsx'])
        .pipe(react({es6module: true}))
        .pipe(concat('zingchart-react.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('prod', function(){
    return gulp.src(['./src/main.jsx'])
        .pipe(react({es6module: true}))
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('zingchart-react.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('full', ['dev', 'prod']);
gulp.task('default', ['dev']);
