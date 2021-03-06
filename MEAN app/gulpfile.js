var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
	// body...
	gulp.
		src('./test/test.js').
		pipe(mocha()).
		on('error', function(err) {
			this.emit('end');
	});
});

gulp.task('watch', function() {
	gulp.watch('./test/*.js', ['test']);
});