var compiler = require('../utilities/html-compiler');

module.exports = function(grunt) {
	'use strict';

	grunt.registerTask(
		'compile-html',
		'Compile all views & components',
		/**
		 * @param; mode
		 */
		function(mode) {
			mode = mode || 'development';

			var pkg = grunt.config('pkg');

			var VIEWS = compiler.getViews();
			var project = {
				dateEdited: Date.now(),
				title: pkg.name,
				version: pkg.version
			};

			var data = {
				'cssPath': getProjectAssets('.css'),
				'jsPath': getProjectAssets('.js')
			};

			data.mode = mode;
			data.site = {
				date: project.dateEdited,
				title: project.title,
				menu: compiler.getMenu(),
			};

			// Compile views/ html to development/view folder
			grunt.log.writeln('Compiling views...');

			VIEWS.forEach(function(view){

				var viewMenu = data.site.menu.filter(
					function findViewName(menuItem) {
						return menuItem.viewName === view.name;
					}
				)[0];

				data.view = compiler.getViewData(view);

				if (viewMenu) {
					data.view.menu = viewMenu.children;
				}

				compiler.compileView(view, data, mode);

				// Compile subviews if any
				if (view.childViews && view.childViews.length !== 0) {
					view.childViews.forEach(function(subview) {
						data.view = compiler.getViewData(subview);

						if (viewMenu) {
							data.view.menu = viewMenu.children;
						}

						compiler.compileView(subview, data, mode);
					});
				}
			});

			grunt.log.ok('All html compiled!');
			grunt.log.writeln('');

			function getProjectAssets(ext) {
				var assetsDir = '/assets/';
				ext = ext || '.asset';

				return assetsDir + project.title + ext;
			}
		}
	);
};
