import { Router } from 'express'
const router = Router()

import ProductManager from '../dao/ProductManager.js'

const productos = new ProductManager('../src/dao/products.json')

router.get('/', (req, res) => {
    const limit = req.query.limit
    if (limit !== null && limit !== undefined) { //Si existe req.query 

        const getProductsLimit = async function () {
            const products = await productos.getProducts()
            const productsLimit = products.slice(0, limit)
            res.send(productsLimit)
        }
        getProductsLimit()
    }
    else { // Trae todos los elementos del array de productos

        const getAllProducts = async function () {
            const products = await productos.getProducts()
            //console.log(result)
            res.send(products)
        }
        getAllProducts()
    }
})

router.get('/:id', (req, res) => {
    const getProductsId = async function () {
        const productsId = await productos.getProductById(req.params.id)
        res.send(productsId)
    }
    getProductsId()
})

router.post('/', (req, res) => {
    const prod = req.body
    const addProduct = async function () {
        const newId = await productos.addProduct(prod)
        res.send("Se agregó carrito con Id: " + newId)
    }

    addProduct()
})

router.put('/:id', (req, res) => {
    const prod = req.body
    const updateProduct = async function () {
        const newId = await productos.updateProduct(req.params.id, prod)
        res.send(newId)
    }

    updateProduct()
    res.json({ status: "success" })
})

router.delete('/:id', (req, res) => {
    const deleteProduct = async function () {
        const productsId = await productos.deleteProduct(req.params.id)
        res.send(productsId)
    }
    deleteProduct()
})

export default router