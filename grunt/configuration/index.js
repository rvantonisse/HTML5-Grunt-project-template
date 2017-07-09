
/**
 * Load external grunt task configuration files by task name from given list.
 * @author Eric Bednarz, Roel Antonisse
 * @param {Object} grunt
 * @param {Array} taskList
 */
function getConfiguration(grunt, taskList) {
    'use strict';
    var configuration = {
        pkg: grunt.file.readJSON('./package.json')
    };

    taskList.forEach(
      function getConfiguration(task) {
        configuration[task] = require('./' + task)(grunt);
      }
    );

    return configuration;
}

module.exports = getConfiguration;
