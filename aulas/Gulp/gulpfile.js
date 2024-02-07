//importando o gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass() {
    return gulp.src('./src/styles/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log ('executando via gulp');
        callback();
    }, 2000)
}

//função publica (tem callback)
function dizOi(callback) {
    console.log('olá gulp');
    dizTchau();
    callback();
}

//função privada (não tem callback)
function dizTchau() {
    console.log('tchau gulp');
}
//fazendo exportação em paralela com o gulp.parallel
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}