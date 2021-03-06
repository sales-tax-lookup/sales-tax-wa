var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var notify = require('gulp-notify');

gulp.task('test', function () {
	gulp.src('spec/**/*.php')
		.pipe(phpspec('', {clear:true,notify:true}))
		.on('error', notify.onError({
			title: 'Doh',
			message: 'A test has failed.',
	}))
	.pipe(notify({
		title: 'Green Means Go',
		message: 'go Go GO!',
	}));

});

gulp.task('watch', function () {
	gulp.watch(['spec/**/*.php', 'src/**/*.php'], ['test']);
});

gulp.task('bdd', ['test','watch']);
