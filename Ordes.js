const Product = require("./Product")

module.exports = class Order {
    #total
    #items
    #user
    constructor(intems, user) {
        intems.forEach(({product, quantity}) => {
            if (quantity > product.inStock) {
                throw new Error("Quantidade insulficiente em estoque!"); // throw é usada para lançar explicitamente um erro
            }            
        })
        this.#items = intems
        this.#user = user
        this.#total = intems.reduce((sum,{product, quantity}) => sum + (product.price * quantity), 0)
    }
    get data() {
        return{
            items:this.#items,
            user: this.#user,
            total:this.#total
        }
    }
}