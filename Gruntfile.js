module.exports = function(grunt) {

  // Configure plugins
  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'src/styles/app.css': 'src/styles/app.scss'
        }
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-sass');

};
