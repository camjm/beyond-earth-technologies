module.exports = function(grunt) {

    // Load the task plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');

    //TODO: correct name of task
    grunt.registerMultiTask('blah', 'blah blah', function() {
        //TODO: implement task
    });

    //TODO: jshint task for json data?

    //TODO: search for task to generate many jade files from one
    //http://stackoverflow.com/questions/24559380/creating-multiple-html-files-from-a-single-jade-template-with-grunt
    //http://stackoverflow.com/questions/17798358/grunt-compiling-jade-files
    //https://github.com/gruntjs/grunt-contrib-jade

    // Project configuration
    grunt.initConfig({
        clean: {
            src: ['build']
        },
        blah: {
            technologies: {
                data: "data/technologies.json"
            }
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