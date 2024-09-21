const express = require ('express')
const Router = new express.Router()

const categoriesServices = require('../services/categories')

Router.get('/getCategory/:category_id', async(req,res)=>{
    try{
        const category_id = req.params.category_id
        const category = await categoriesServices.getCategoryID(category_id)

        console.log(category)
        res.send(category)
    }catch(err){
        return "can't get to categories"
    }
})

Router.get('/getCategoriesByDate/:category_date', async(req,res)=>{
    try{
        const category_date = req.params.category_date
        const categories = await categoriesServices.getCategorybyDate(category_date)

        console.log(categories)
        res.send(categories)
    }catch(err){
        return "can't get to categories"
    }
})

module.exports = Router