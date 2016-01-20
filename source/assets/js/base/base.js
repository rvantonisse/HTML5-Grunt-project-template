/*! rv-antonisse.nl */
// Main JavaScript file
(function () {
	'use strict';

	var app = {
		title: '',
	};
	function thisIsAnApp (appName) {
		appName = appName || 'no name';
		if (!(appName === 'no name')) {
			appName = 'the name ' + appName;
		}
		console.log('This is an app with ' + appName);
	}

	thisIsAnApp('SuperGrunt');

	return app = {
		// return the app public methods
	};
})();