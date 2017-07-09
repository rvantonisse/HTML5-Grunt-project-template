/**
 * Grunt configuration for:
 * COPY
 */
function getConfiguration(grunt) {
	'use strict';

	return {
		development: {
			files: [
				// Asset images
				{
					expand:true,
					cwd: '<%= assetsDir %>images/',
					src: ['**/*'],
					dest: 'development/assets/images/'
				},
				// Font assets
				{
					expand:true,
					cwd: '<%= assetsDir %>fonts/',
					src: ['**/*'],
					dest: 'development/assets/fonts/'
				},
				// General media
				{
					expand:true,
					cwd: 'source/media/',
					src: ['**/*'],
					dest: 'development/media/'
				}
			]
		},
		distribution: {
			files: [
				// Asset images
				{
					expand:true,
					cwd: '<%= assetsDir %>images/',
					src: ['**/*'],
					dest: 'distribution/assets/images/'
				},
				// Font assets
				{
					expand:true,
					cwd: '<%= assetsDir %>fonts/',
					src: ['**/*'],
					dest: 'distribution/assets/fonts/'
				},
				// Media
				{
					expand:true,
					cwd: 'source/media/',
					src: ['**/*'],
					dest: 'distribution/media/'
				}
			]
		}
	};
}

module.exports = getConfiguration;
