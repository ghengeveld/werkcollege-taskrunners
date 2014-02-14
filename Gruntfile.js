module.exports = function(grunt) {

  // Configure plugins
  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'src/styles/app.css': 'src/styles/app.scss'
        }
      }
    },
    clean: {
      dev: ['src/styles/app.css']
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');

};
