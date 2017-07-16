/*
** HTML-COMPILER
** Translate Nunjucks templating for this projects needs.
**/
var fs = require('fs');
var grunt = require('grunt');
var nunjucks = require('nunjucks');
var njDateFilter = require('nunjucks-date-filter')
var helpers = require('./helpers');

(function(){
	'use strict';

	var file = grunt.file;

	var env = new nunjucks.Environment([
		new nunjucks.FileSystemLoader(getTemplateDir())
	]);
	env.addFilter('date', njDateFilter);

	var VIEWS = readViewsDir();
	var MENU = createMenu();

	// Setup basic configuration
	function getSourceDir () {
		return 'source/';
	}

	function getAssetsDir () {
		return 'assets/';
	}

	function getTemplateDir () {
		return getSourceDir() + 'templates/';
	}

	function getViewsDir () {
		return getTemplateDir() + 'views/';
	}

	function getComponentsDir () {
		return getTemplateDir() + 'components/';
	}

	function byMenuOrder(a, b) {
		var aNumber = a.order || 0;
		var bNumber = b.order || 0;

		if ( aNumber < bNumber ) {
			return -1;
		}

		if (aNumber > bNumber) {
			return 1;
		}

		return 0;
	}

	function createMenu() {
		grunt.log.writeln('Build menu...');

		return VIEWS.map(
			function createMenuList(view) {

				return {
					viewName: view.name,
					path: getMenuLink(view.path),
					title: createMenuTitle(view.name),
					order: getViewOrder(view),
					children: view.childViews && view.childViews.map(
						function createChildMenuList(child) {

							return {
								viewName: child.name,
								path: getMenuLink(child.path),
								title: createMenuTitle(child.name),
								order: getViewOrder(child),
							};
						}
					)
					.filter(
						function filterWithOrder(child) {
							return child.order;
						}
					)
					.sort(byMenuOrder),
				};
			}
		).filter(
			function filterWithOrder(menuItem) {
				return menuItem.order;
			}
		).sort(byMenuOrder);
	}

	function createMenuTitle(string) {
		var replaceChar = helpers.replaceChar;
		var capitalize = helpers.capitalize;

		return capitalize(replaceChar(string, '-', ' '));
	}

	function compileView(view, data, target) {
		data = data || {};

		var filename = view.path + view.name + '.html';
		var viewsDir = 'views/';
		var template = getTemplate(viewsDir + filename);
		var html = template && template.render(data);

		if (!html) {
			grunt.log.warn('No template found for: ', view.name);
			return false;
		}

		if (view.name === 'home') {
			file.write(target + '/index.html', html);
		} else {
			file.write(target + '/' + view.path + 'index.html', html);
		}

		grunt.log.ok(view.name + ' into: ' + target);

		return html;
	}

	function getMenu() {
		return MENU;
	}

	function getMenuLink(viewPath) {
		if (viewPath.indexOf('home') !== -1) {
			return '/index.html';
		}

		return '/' + viewPath;
	}

	function getTemplate (name) {
		if (!file.isFile('source/templates/' + name)) {
			return false;
		}

		return env.getTemplate(name);
	}

	function getViewData(view) {
		var dataPath = getViewsDir() + view.path + view.name + '.json';

		grunt.log.writeln('Data: ', dataPath);

		if (file.isFile(dataPath)) {
			return file.readJSON(dataPath);
		}

		return {};
	}

	function getViewOrder(view) {
		return getViewData(view).order || 0;
	}

	function getViews() {
		return VIEWS;
	}

	function readViewsDir(path) {
		var parentViewPath = path || '';
		var basePath = getViewsDir() + parentViewPath;
		var basePathChildDirs = fs.readdirSync(basePath).filter(
			function filterDirectories(childDir){
				return file.isDir(basePath + childDir);
			}
		);

		if (basePathChildDirs.length === 0) {
			return [];
		}

		return basePathChildDirs.map(
			function createViewObject(viewName) {
				var viewPath = parentViewPath + viewName + '/';

				return {
					name: viewName,
					path: viewPath,
					parentView: parentViewPath,
					childViews: readViewsDir(viewPath),
				};
			}
		);
	}

	module.exports = {
		compileView: compileView,
		getMenu: getMenu,
		getViews: getViews,
		getViewData: getViewData,
	};

}());
