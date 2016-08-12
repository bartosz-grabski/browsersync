/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.

    watch: {
      screenshots: {
        files : ['screenshots/*.png', 'index.html'],
        options: {
          livereload: 1227
        }
      }
    },

    express: {
        prod: {
          options: {
            script : 'server.js',
            background: false
          }
        }
    },
    
    concurrent: {
      browsersync: {
        tasks: [
          'browserSync:devStrype',
          'browserSync:devBeeGee',
          'browserSync:devBartek',
          'browserSync:devArek'
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      server: {
        tasks: [
          'watch',
          'express'
        ],
        options: {
          logConcurrentOutput: true
        }
      }

    },

    browserSync: {
      "devStrype": {
        options: {
            proxy: "localhost:8080",
            port: 3000,
            ui: {
              port: 9000
            },
            open: false,
            files : "bogus"
        }
      },
      "devArek" : {
        options: {
            proxy: "localhost:8080",
            port: 3001,
            ui: {
              port: 9001
            },
            open: false
        }
      },
      "devBartek" : {
        options: {
            proxy: "localhost:8080",
            port: 3002,
            ui: {
              port: 9002
            },
            open: false
        }
      },
      "devBeeGee" : {
        options: {
            proxy: "localhost:8080",
            port: 3003,
            ui: {
              port: 9003
            },
            open: false
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-express-server');

  // Default task.
  grunt.registerTask('default', ['concurrent:browsersync']);
  grunt.registerTask('serve', ['concurrent:server'])
  grunt.registerTask('phantom', [] )

};
