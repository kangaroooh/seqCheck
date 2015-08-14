var gulp = require('gulp'),
    browserSync = require('browser-sync'); // a server running test
gulp.task('test', function(){
    browserSync.init({ // browser sync can auto refresh <3
        notify:false,
        port: 8081,
        server:{
            baseDir: ['test', 'app'], // set base dir, so we don't have to refer to paths all the time
            routes: {
                '/node_modules': 'node_modules' // to point out the location
            }
        }
    });
   gulp.watch(['test/**/*.*', 'app/**/*.*']).on('change', browserSync.reload);
    // to set which file has been changed then do the reload
});
