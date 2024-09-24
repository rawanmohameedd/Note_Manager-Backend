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

Router.post('/userAddNote', async(req,res)=>{
    try{
        const payload = {
            user_id: req.body.user_id, 
            note_title: req.body.note_title, 
            note_content: req.body.note_content, 
            note_status: req.body.note_status
        }
            const result = userServices.addNote(payload)
            console.log(result)
            res.send(result)
        }catch(error){
        return {error: "can't add the note"}
    }
})

Router.delete('/userDeleteNote/:id', async(req,res)=>{
    try{
        const user_id = req.params.id
        console.log(user_id)
        const result = await userServices.deleteNote(user_id)
        console.log(result)
        return res.send(result)
    }catch(error){
        return {error: "can't delete this user"}
    }
})

module.exports = Router