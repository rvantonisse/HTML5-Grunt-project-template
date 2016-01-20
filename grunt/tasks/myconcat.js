module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'myconcat',
		'Setup development dir and watch source',
		function (mode) {
			var mode = mode || 'development';
			var concat = 'concat';
			var tasks = [];

			switch (mode) {

			case "development":
			concat = concat + ':' + mode;
			tasks = [
				concat + ':css-vendors',
				concat + ':css-base',
				concat + ':css-final'
			];

			grunt.task.run(tasks);
			break;
			}
		}
	);
};
