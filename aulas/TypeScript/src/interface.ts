interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean
    TaxaTransferencia: number
}

interface IExemplo2 {
    cnpj: number
}

interface IExemplo3 extends IExemplo2 {
    telefone: number
}

class Conta {
    numeroDaConta: number
    public saldo: number = 0

    constructor(numeroDaConta: number) {
       this.numeroDaConta = numeroDaConta 
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor
    }
}

class ContaCorrente extends Conta implements ITransacional {
    transferir (valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.TaxaTransferencia)
        return true
    }
    TaxaTransferencia: number = 0

}