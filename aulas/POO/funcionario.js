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
        return _salario
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    //atribui salario (setters)
    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario
    }

    Pessoa.call(this, nome)
}

function Estagiario(nome) {
    Funcionario.call(this, nome, 'Estagiário', 2000)

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario)
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, 'Gerente', 10000)

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario)
    }
}

const Funcionario1 = new Funcionario('Maria', 'Dev', 5000)
const Funcionario2 = new Estagiario('Pedro')
const Funcionario3 = new Gerente('Paula')

Funcionario1.aumento()
console.log(Funcionario1.getSalario())

Funcionario2.aumento()
console.log(Funcionario2.getSalario())

Funcionario3.aumento()
console.log(Funcionario3.getSalario())