class Animal {
    constructor (type = 'animal') {
        this.type = type
    }

    get type(){
        return this._type
    }

    set type(val) {
        this._type = val.toUpperCase()
    }

    makeSound() {
        console.log('Making Animal Sound')
    }
}

class Veiculos {
    constructor (type = 'veiculos') {
        this.type = type
    }

    get type(){
        return this._type  
    }

    set type(val) {
        this._type = val.toUpperCase()
    }

    makeSound() {
        console.log('Making Animal Sound')
    }
}


let a = new Veiculos()

console.log(a.type)
