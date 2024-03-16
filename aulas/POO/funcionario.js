function Pessoa(nome) {
    this.nome = nome;
    
    this.dizOi = function() {
        console.log(this.nome + ' diz olá')
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo
    this.salario = salario

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    Pessoa.call(this, nome)
}

const Funcionario1 = new Funcionario('Maria', 'Dev', 5000)
Funcionario1.dizOi()
Funcionario1.dizCargo()