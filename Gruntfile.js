module.exports = function(grunt) {

    // Load the task plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerMultiTask('blah', 'blah blah', function() {

    });

    // Project configuration
    grunt.initConfig({
        clean: {
            src: ['build']
        },
        jade: {
            options: {
                pretty: true,
                data: function(dest, src) {
                    return {
                        from: src,
                        to: dest
                    };
                }
            },
            technologies: {
                files: {
                    "build/foo.html": "src/foo.jade"
                }
            }
        }
    });

    // Define the default task
    grunt.registerTask('default', ['clean', 'jade']);
};