//importando o gulp
const gulp = require('gulp');

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