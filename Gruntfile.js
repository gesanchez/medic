module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    './css/style.css': './less/style.less'
                },
                options: {
                    compress: true
                }
            }
        },
        watch:{
            less:{
                files:['./less/*.less', './less/**/*.less'],
                tasks:['less:development']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);
};
