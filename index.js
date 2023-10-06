

class heroi {
  constructor(nome, idade, tipo) {
    this.name = nome
    this.age = idade
    this.type = tipo
    this.atack
  }
  atacar() {
    if (this.type === 'mago') {
      this.atack = 'magia'
    }
    if (this.type === 'guerreiro') {
      this.atack = 'espada'
    }
    if (this.type === 'monge') {
      this.atack = 'artes maciais'
    } else {
      this.atack = 'shuriken'
    }
    console.log(`O ${this.type} ${this.name} atacou usando ${this.atack}`)
  }
}

novoPersonagem0 = new heroi('Daniel', 29, "ninja")
novoPersonagem1 = new heroi("Felipão",60,"monge")

novoPersonagem0.atacar()
novoPersonagem1.atacar()

