function funcaoPadrao(callback) {
    console.log ('executando via gulp');
    callback();
}

function dizOi(callback) {
    console.log('olá gulp');
    dizTchau();
    callback();
}

function dizTchau() {
    console.log('tchau gulp');
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;