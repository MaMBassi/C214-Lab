class Veiculo {
    placa;//String
    ano;//int

    constructor(placa, ano){
        this.ano = ano
        this.placa = placa
    }

    setPlaca(novaPlaca){
        this.placa = novaPlaca
    }

    setAno(novoAnoS){
        this.ano = novoAnoS
    }

    getPlaca(){
        return this.placa
    }

    getAno(){
        return this.ano
    }

    exibirDados(){
        console.log("Placa: ", this.placa)
        console.log("Ano: ", this.ano)
    }
}

class Caminhao extends Veiculo{
    eixos;//int

    constructor(placa, ano, eixos){
        super(placa, ano)
        this.eixos = eixos
    }

    setEixos(novoEixo){
        this.eixos = novoEixo
    }

    getEixos(){
        return this.eixos
    }

    exibirDados(){
        console.log("--Caminhao--")
        console.log("Placa: ", this.placa)
        console.log("Ano: ", this.ano)
        console.log("Eixos: ", this.eixos)
    }
}

class Onibus extends Veiculo{
    assentos;//int

    constructor(placa, ano, assentos){
        super(placa, ano)
        this.assentos = assentos
    }

    setAssentos(novoAssento){
        this.assentos = novoAssento
    }

    getAssentos(){
        return this.assentos
    }

    exibirDados(){
        console.log("--Onibus--")
        console.log("Placa: ", this.placa)
        console.log("Ano: ", this.ano)
        console.log("Assentos: ", this.assentos)
    }
}

let veiculo = new Veiculo();

veiculo.setAno('1993')
veiculo.setPlaca('ABC123')
veiculo.exibirDados()

let caminhao = new Caminhao('CMA123', 2000, 2)
let onibus = new Onibus('CMA123', 2000, 45)
onibus.exibirDados()
caminhao.exibirDados()

