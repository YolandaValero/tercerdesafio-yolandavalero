import {promises as fs} from "fs"

export default class ProductManager {
    constructor() {
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, thumbnail, code, stock) => {
        ProductManager.id++
        let newProduct = {
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock,
            id: ProductManager.id
        }

        this.products.push(newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.products))
    }

    readProducts = async () =>{
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
    }

    getProductsById = async (id) => {
        let respuestaTres = await this.readProducts()
        if (!respuestaTres.find(product => product.id === id)){
        console.log("No Encuentro tu Producto")
        } else {
        }
    }

    deleteProductsById = async (id) => {
        let respuestaTres = await this.readProducts()
        let productFilter = respuestaTres.filter((products) => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter))
        console.log("Este Producto ha sido Eliminado")
    }

    updateProducts = async ({id, ...producto}) => {
        await this.deleteProductsById(id)
        let oldProduct = await this.readProducts()
        let modifiedProducts = [{...producto, id}, ...oldProduct]
        await fs.writeFile(this.patch, JSON.stringify(modifiedProducts))
    }
}

//const productos = new ProductManager()

/*productos.addProduct("Cama Donita", "Cama redonda con tela antirasgaduras. Variedad de telas y colores", 3000, "imagen1", "abcd121", 10)
productos.addProduct("Cama Nidito", "Cama redonda con bordes altos, con tela antirasgaduras y peluche, reversible, ideal para frío y calor. Variedad de telas y colores", 4500, "imagen2", "abcd122", 15)
productos.addProduct("Cama Cuadrada", "Cama cuadrada con tela antirasgaduras y peluche, reversible, ideal para frío y calor. Variedad de telas y colores", 4000, "imagen3", "abcd123", 20)
productos.addProduct("Casa de Tela", "Casa de tela impermeable, ideal para interior y exterior, para varios perros chicos o uno grande. Variedad de telas y colores", 15000, "imagen4", "abcd124", 20)
productos.addProduct("Casa de Madera", "Casa de madera para exterior, fácil de armar todas las partes vienes listas de solo unir con tornillos. Incluye todo lo necesario para su armado", 22000, "imagen5", "abcd125", 20)
productos.addProduct("Casa Plástica", "Casa de plástico para interior o exterior, fácil de armar todas las partes vienes listas de solo unir con tornillos. Incluye todo lo necesario para su armado", 25000, "imagen6", "abcd126", 20)
productos.addProduct("Choclo", "Choclo de plástico para moder, jugar o para control de ansiedad ya que se puede rellenar con balanceado y a medida que juegan el alimento va saliendo poco a poco", 1500, "imagen7", "abcd127", 20)
productos.addProduct("Pelota", "Pelota de plástico para moder, jugar o para control de ansiedad ya que se puede rellenar con balanceado y a medida que juegan el alimento va saliendo poco a poco", 1500, "imagen8", "abcd128", 20)
productos.addProduct("Hueso de Tela", "Hueso de tela para jugar y entrenar la mordida", 1850, "imagen9", "abcd129", 20)
productos.addProduct("Buzo con Capucha", "Buzo con capucha y cierre al frente, es de tela suave, ideal para otoño. Variedad de tamaños, colores y telas", 1600, "imagen10", "abcd1210", 20)
productos.addProduct("Chaleco", "Chaleco con capucha, tela gruesa ideal para el frío. Variedad de tamaños, colores y telas", 2000, "imagen11", "abcd1211", 20)
productos.addProduct("Buzo Completo", "Buzo completo; cubre todo el cuerpo, las patitas y tiene capucha con orejitas. Tela corderito estampado o unicolor, ideal para el frío. Variedad de tamaños, colores y telas", 1850, "imagen12", "abcd1212", 20)
*/

//productos.getProducts()

//productos.getProductsById(2)

//productos.deleteProductsById(3)

/*productos.updateProducts({
    title: 'Cama Nidito',
    description: 'Cama redonda con bordes altos, con tela antirasgaduras y peluche, reversible, ideal para frío y calor. Variedad de telas y colores',
    price: 6900,
    thumbnail: 'imagen2',
    code: 'abcd124',
    stock: 15,
    id: 2
})*/ 