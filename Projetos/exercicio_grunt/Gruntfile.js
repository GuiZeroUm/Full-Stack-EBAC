module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          "path/to/output.css": "path/to/input.less"
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'path/to/output.min.js': ['path/to/input1.js', 'path/to/input2.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};