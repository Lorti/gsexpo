'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		autoprefixer: {
			options: {
				browsers: ['last 3 versions'],
				map: true
			},
			target: {
				src: 'css/main.css',
				dest: 'css/main.css'
			},
		},
		concurrent: {
	        target: ['watch', 'connect'],
	        options: {
                logConcurrentOutput: true
            }
	    },
		jekyll: {
			target: {
				options: {
					dest: '_site/',
					config: '_local.yml'
				}
			}
		},
		sass: {
			target: {
				options: {
					sourcemap: 'true',
					style: 'compressed'
				},
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['scss/**'],
				tasks: ['sass', 'autoprefixer']
			},
			html: {
				files: ['css/*.css', '*.html', '*/**.markdown', '_layouts/**', '_posts/**'],
				tasks: ['jekyll']
			}
		},
		connect : {
			server :{
				options: {
					port : 4000, 
					base: '_site',
					keepalive : true,
					livereload : true
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['concurrent']);

};