const Product = require ('./Product')

module.exports = class poster extends Product {
    constructor(name, description, height, width, price, inStock = 0) {
     super (name, description, price, inStock) // super é usada para acessar o objeto pai de um objeto
     this.height = height
     this.width = width
    }
}

