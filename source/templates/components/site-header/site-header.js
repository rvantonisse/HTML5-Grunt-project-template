/* .site-header -> siteHeader */
(function (selector) {
	var d = document;

	siteHeader = d.querySelector(selector);
	console.log('siteHeader magic', siteHeader);

})('.site-header');