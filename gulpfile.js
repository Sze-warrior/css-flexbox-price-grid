var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
	return gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest("css"));
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['sass']);
});

gulp.task("default", ['sass']);