const express = require('express')
const Router = new express.Router()
const noteServices = require('../services/notes')

Router.get("/note/:id", async(req,res)=>{
    try{
        const note_id = req.params.id
        const result = await noteServices.getNote(note_id)
        console.log(result)
        res.send(result)
    }catch (error) {
        console.error('Error in route:', error);
        return res.status(500).send({ error: "Can't get to this user" });   
    }
})

Router.get("/noteDate/:date", async(req,res)=>{
    try{
        const note_date = req.params.date
        const result = await noteServices.getNotebyDate(note_date)
        console.log(result)
        res.send(result)
    }catch (error) {
        console.error('Error in route:', error);
        return res.status(500).send({ error: "Can't get to this note" });   
    }
})

Router.get("/notesbyUser/:userID", async(req,res)=>{
    try{
        const user_id = req.params.userID
        const result = await noteServices.getNotesIDbyuserID(user_id)
        console.log(result)
        res.send(result)
    }catch (error) {
        console.error('Error in route:', error);
        return res.status(500).send({ error: "Can't get to this note" });   
    }
})

module.exports = Router