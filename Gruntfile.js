module.exports = function(grunt) {

  // Configure plugins
  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'src/styles/app.css': 'src/styles/app.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['*.scss', 'bootstrap.css'],
          dest: 'dist/styles',
          ext: '.css'
        }]
      }
    },
    clean: {
      dev: ['src/styles/app.css'],
      dist: ['dist/*']
    },
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/scripts',
          src: ['*.js'],
          dest: 'dist/scripts'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },
    watch: {
      files: ['src/styles/*.scss'],
      tasks: ['sass:dev']
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean:dist', 'sass:dist', 'uglify:dist', 'htmlmin:dist']);

};
