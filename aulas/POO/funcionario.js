function Pessoa(nome) {
    this.nome = nome;
    
    this.dizOi = function() {
        console.log(this.nome + ' diz olá')
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo
    // this.salario = salario
    let _salario = salario
    
    // pega salario (getters)
    this.getSalario = function() {
        return `O salário de ${this.nome} é ${_salario}`
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    //atribui salario (setters)
    this.setSalario = function(valor) {
        if (typeof valor === Number) {
            _salario = valor
        }
    }

    Pessoa.call(this, nome)
}

const Funcionario1 = new Funcionario('Maria', 'Dev', 5000)
Funcionario1.dizOi()
Funcionario1.dizCargo()

Funcionario1.setSalario('mil') 

console.log (Funcionario1.getSalario())