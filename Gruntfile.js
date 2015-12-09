module.exports = function(grunt) {
  // Load grunt-tasks saved in the package.json
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    // Clean folders, e.g. remove them - DONT TRY TARGET ROOT "./" LOL
    clean: {
      build: "build/",
      dev: "dev/",
      dist: "dist/"
    },

    // Copy stuff (and paste) from one place to another
    copy: {},

    // Put files together in one file
    concat: {
      css: {
        files: [{
          src: ["source/assets/css/**/*.css"],
          dest: "build/css/build.css",
        }]
      }
    },

    // Minify target css files into destination css minified file
    cssmin: {
      dist: {
        files: [{
          src: ["build/css/*.css"],
          dest: "dist/assets/css",
          ext: ".min.css"
        }]
      }
    },

    // Minify / uglyfy js files
    uglify: {},

    // Watch files and do stuff when changed
    watch: {}
  };
  grunt.initConfig(gruntConfig);

  /*
  Default task(s)
  */
  // Build; /build
  grunt.registerTask('build',['concat:css','concat:js']);

  // Develop; /dev
  grunt.registerTask('develop', ['clean:dev','build','watch']);
  // Distribute; /dist
  grunt.registerTask('distribute', ['clean:dist','uglify:dist','cssmin:dist','copy:dist']);
  // Default task; Develop
  grunt.registerTask('default', ['develop']);

};