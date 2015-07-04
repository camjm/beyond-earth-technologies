module.exports = function (grunt) {

    // Load the task plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');

    // Project configuration
    grunt.initConfig({
        clean: {
            src: ['build']
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true
            },
            all: ['Gruntfile.js', 'src/**/*.{js,json}', 'test/**/*.js'],
            json: "src/data/*.json"
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
    grunt.registerTask('default', ['clean', 'jshint:all', 'jade']);
};