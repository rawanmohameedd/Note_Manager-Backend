const express = require('express')
const Router = new express.Router()
const reminderServices = require('../services/reminders')

Router.get('/reminderbyid/:reminder_id', async(req,res)=>{
    try{
        const reminder_id = req.params.reminder_id
        const reminder = await reminderServices.reminderID(reminder_id)
        console.log(reminder)
        res.send(reminder)
    }catch(err){
        return err.message
    }
})

Router.get('/remindersbyNote/:note_id', async(req,res)=>{
    try{
        const note_id = req.params.note_id
        const reminders = await reminderServices.reminderByNote(note_id)
        console.log(reminders)
        res.send(reminders)
    }catch(err){
        return err.message
    }
})

module.exports = Router