module.exports = function(grunt) {


    console.log("Begin Ofuscated a minificated process");

    var dist = {files: {}}; //Json Where list js files to ofuscated
    var js = {files: {}}; //Json Where list js files to minificated

    var path = require('path'),
    fs = require('fs');

    //Esta funcion va buscando directorio a directorio los archivos de la extension que le pases como argumento en este caso archivos javascript (.js)
function fromDir(startPath, filter) {

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory() && !filename.includes("node_modules")) { //ÑAPA Add excludes directories TODO: improve this way
            fromDir(filename, filter); //recurse
        } else if (filename.endsWith(filter) && !filename.includes("Gruntfile.js") && !filename.includes("Gruntfile.js")) { // Add excludes files TODO: improve this way
            console.log('-- found: ', filename);
            var Dest_File = filename.replace("Desarrollo", "Release");
            console.log('-- Dest_File: ', Dest_File);
            dist.files[Dest_File] = filename;
            js.files[Dest_File] = filename;
        };
    };
};

//fromDir('/PROJECTS/PaulBlackSmiths.es/Desarrollo/public_html/', '.js');
fromDir('./', '.js');


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        javascript_obfuscator: dist.files,

        cssmin : {                            
            css:{
/*                 src: 'assets/css/body.css',
                dest: 'assets/css/body.css' */
            }
        },

        uglify: js.files,
    });

    grunt.loadNpmTasks('grunt-javascript-obfuscator');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['javascript_obfuscator','cssmin:css','uglify:js']); 

};