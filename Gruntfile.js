module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// tasks
		jscs: grunt.file.readJSON('./grunt/tasks/jscs.json'),
		uglify: grunt.file.readJSON('./grunt/tasks/uglify.json'),
		jshint: grunt.file.readJSON('./grunt/tasks/jshint.json')
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jscs-checker');

	grunt.registerTask(
		'default',
		[
			'jscs',
			'jshint',
			'uglify'
		]
	);

};
