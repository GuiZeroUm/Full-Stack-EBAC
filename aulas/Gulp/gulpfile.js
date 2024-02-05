//importando o gulp
const gulp = require('gulp');

function funcaoPadrao(callback) {
    console.log ('executando via gulp');
    callback();
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
//fazendo exportação em série com o gulp.series
exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;