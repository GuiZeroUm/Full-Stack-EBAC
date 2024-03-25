let estaChovendo: boolean = false

let idade: number = 19

let altura: number = 1.65

const nacionalidade: string = 'Brasileiro'

// arrays

//criando tipo string
const colegas: string[] = ['Lucas', 'Maria', 'Pedro']

//criando tipo string de outra forma
const tecnologias: Array<string> = ['html', 'css', 'js']

// array de apenas leitura
const notas: ReadonlyArray<Number> = [7, 9, 5, 8]

//criando tupla
const lista: [nome: string, estaEstudando: boolean, idade: number] = 
['gui', true, 0]

//union type (a variavel aceita tipo numerico e outro que eu atribuir)
let idadeDoGui: number | string = 19
idadeDoGui = '19 anos'

//Any aceita qualquer valor
let dadosDaApi: any
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1, 2 ,3]
dadosDaApi = 'Gui'