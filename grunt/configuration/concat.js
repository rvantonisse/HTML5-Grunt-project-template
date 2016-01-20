/**
 * Grunt configuration for:
 * CONCAT
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		css: {
			files: [
				// CSS files
				{
					src: [
						'source/assets/css/vendor/**/*.css',
						'source/assets/css/base/**/*.css',
						'source/templates/views/**/*.css',
						'source/templates/components/**/*.css'
					],
					dest: 'development/assets/<%= pkg.name %>.css'
				}
			]
		},
		js: {
			files: [
				// JS files
				{
					src: [
						'source/assets/js/vendor/**/*.js',
						'source/assets/js/base/**/*.js',
						'source/templates/views/**/*.js',
						'source/templates/components/**/*.js'
					],
					dest: 'development/assets/<%= pkg.name %>.js'
				}
			]
		},
		distribution: {
			files: [
				// CSS files
				{
					src: [
						'source/assets/css/vendor/**/*.css',
						'source/assets/css/base/**/*.css',
						'source/templates/views/**/*.css',
						'source/templates/components/**/*.css'
					],
					dest: 'distribution/assets/<%= pkg.name %>.css'
				},
				// JS files
				{
					src: [
						'source/assets/js/vendor/**/*.js',
						'source/assets/js/base/**/*.js',
						'source/templates/views/**/*.js',
						'source/templates/components/**/*.js'
					],
					dest: 'distribution/assets/<%= pkg.name %>.js'
				}
			]
		}
	};
}

module.exports = getConfiguration;