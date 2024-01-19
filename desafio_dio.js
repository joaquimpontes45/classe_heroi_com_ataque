class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }
    //exibição da classe do heroi e tipo do ataque
    atacar() {
        let ataque = this.tipoDeAtaque();
        console.log("O " + this.classe + " atacou usando " + ataque)
    }

    //tipo do ataque com base na classe do heroi
    tipoDeAtaque() {
        switch (this.classe) {
            case "mago":
                return "magia"
            case "guerreiro":
                return "espada"
            case "monge":
                return "artes marciais"
            case "summoners":
                return "invocação"
            case "viking":
                return "ira"
            
        }
    }
}

//fazer um loop onde vai se encerra quando não tiver mais herois
function ataquesDoHeroi(listaDeHerois) {
    for (let i = 0; i < listaDeHerois.length; i++) {
        listaDeHerois[i].atacar()
    }
}

// Criar heróis
let listaDeHerois = [
    new Heroi("ganondof", 500, "mago"),
    new Heroi("kai", 20, "guerreiro"),
    new Heroi("baladada", 120, "monge"),
    new Heroi("gray", 45, "summoners"),
    new Heroi("baster", 30, "viking")
    
]


ataquesDoHeroi(listaDeHerois)