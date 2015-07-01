module.exports = function (grunt) {

    // Load the task plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');

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
        // Compilation
        jade: {
            options: {
                pretty: true
            },
            technologies: {
                src: "src/views/technologies.jade",
                dest: "build/technologies.html",
                options: {
                    data: require('./src/data/technologies.json')
                }
            },
            buildings: {
                src: "src/views/buildings.jade",
                dest: "build/buildings.html",
                options: {
                    data: require('./src/data/buildings.json')
                }
            },
            units: {
                src: "src/views/units.jade",
                dest: "build/units.html",
                options: {
                    data: require('./src/data/units.json')
                }
            },
            app: {
                src: "src/views/app.jade",
                dest: "build/app.html",
                options: {
                    data: {
                        sections: [
                            '<%= jade.technologies.options.data %>',
                            '<%= jade.buildings.options.data %>',
                            '<%= jade.units.options.data %>'
                        ]
                    }
                }
            }
        }
    });

    // Define the default task
    grunt.registerTask('default', ['clean', 'jade']);
};