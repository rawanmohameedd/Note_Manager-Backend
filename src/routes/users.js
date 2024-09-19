const express = require('express')
const Router = new express.Router()
const userServices = require('../services/users')


Router.get('/user/:id', async(req,res)=>{
    try{
        const user_id = req.params.id
        console.log(user_id)
        const result = await userServices.getUser(user_id)
        console.log(result)
        return res.send(result)
    }catch(error){
        return {error: "can't get to this user"}
    }
})

module.exports = Router