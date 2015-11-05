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
        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'watch']);
};
