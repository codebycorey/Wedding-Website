module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/normalize.css' : 'sass/normalize.scss',
                    'css/style.css' : 'sass/style.scss'
                },
                options: {
                    style: 'expanded',
                    noCache: true,
                    sourcemap: 'none'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    keepalive: true,
                    livereload: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
            },
            html: {
                files: ['**/*.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['sass', 'watch']);
    grunt.registerTask('server', ['connect']);
};
