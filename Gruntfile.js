module.exports = function(grunt) {

  // Project configuration.
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    clean: {},
    copy: {},
    cssmin: {},
    uglify: {},
    concat: {},
    watch: {}
  };
  grunt.initConfig(config);

  // Load grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('develop', ['clean']);
  grunt.registerTask('distribute', ['clean:dist','uglify:dist','cssmin:dist','copy:dist']);
  grunt.registerTask('default', ['develop']);

};