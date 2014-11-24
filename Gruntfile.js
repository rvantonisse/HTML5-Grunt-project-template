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

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('develop', ['clean']);
  grunt.registerTask('distribute', ['clean:dist','uglify:dist','cssmin:dist','copy:dist']);
  grunt.registerTask('default', ['develop']);

};