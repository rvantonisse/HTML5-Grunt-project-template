var helpers = require('../utilities/helpers');
var fs = require('fs');

module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('create-component', 'Create a new component',
  /**
		 * Create a new component inside source/templates/components/
		 * new-component/
		 * - new-component.css
		 * - new-component.html
		 * - new-component.js
		 * @param {String} componentName
		 */
  function(componentName) {
    var file = grunt.file;

    function getConfigComponentName() {
      return grunt.config('createComponent.componentName') || null;
    }

    function getComponentName() {
      return componentName || getConfigComponentName();
    }

    function getComponentUrl() {
      var niceUrl = helpers.replaceSpacesWithDashes;
      return niceUrl(getComponentName());
    }

    function getDestination() {
      return 'source/templates/components/' + getComponentUrl();
    }

    // Get new-component template
    function getTemplate(path) {
      return file.read(path).replace(/_COMPONENT_NAME_/g, getComponentUrl());
    }

    function getTemplateFiles(path) {
      return fs.readdirSync(path).filter(function(name) {
        return file.isFile(path + name);
      });
    }

    function writeFiles() {
      var newComponentTemplatesDir = 'grunt/templates/new-component/';
      var files = getTemplateFiles(newComponentTemplatesDir);

      // Create destinationdir
      file.mkdir(getDestination());

      // Write files
      grunt.log.writeln('Writing files:');
      files.forEach(function(name) {
        var template = getTemplate(newComponentTemplatesDir + name);
        name = name.replace('new-component', getComponentUrl());
        grunt.log.ok(name);
        file.write(getDestination() + '/' + name, template);
      });
    }

    // No componentname
    if (getComponentName() === '' || getComponentName() === null) {
      grunt.task.run(['prompt:create-component', 'create-component']);
      return true;
    }

    // Component already exists: abort task
    if (file.isDir(getDestination())) {
      grunt.log.error('"' + getDestination() + '" already exists, task was aborted.');
      return true;
    }

    writeFiles();

    // Reset createComponent.componentName
    grunt.config('createComponent.componentName', null);
  });
};
