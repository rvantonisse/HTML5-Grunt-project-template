/**
 * Grunt configuration for:
 * UGLIFY
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		// development: {
		// 	files: [
		// 		// JS files
		// 		{
		// 			src: [
		// 				'<%= jsSourceDir %>vendor/**/*.js',
		// 				'<%= jsSourceDir %>base/**/*.js',
		// 				'<%= componentsSourceDir %>**/*.js'
		// 			],
		// 			dest: 'distribution/assets/<%= pkg.name %>.min.js'
		// 		}
		// 	]
		// },
		distribution: {
			options: {
				preserveComments: 'some'
			},
			files: [
				// JS files
				{
					src: [
						'<%= jsSourceDir %>vendor/**/*.js',
						'<%= jsSourceDir %>base/**/*.js',
						'<%= componentsSourceDir %>**/*.js'
					],
					dest: 'distribution/assets/<%= pkg.name %>.min.js'
				}
			]
		}
	};
}

module.exports = getConfiguration;