const { set } = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'styles.css': 'styles.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'styles.min.css': 'styles.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'styles2.css' : 'styles.scss'
                }
            }
        }
    })

    grunt.registerTask('helloWorld', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('Hello World');
            done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['less', 'sass'])
        
}