const reminderModels = require('../models/reminders')

const reminderID = async(reminder_id)=>{
    try{
        const reminder = await reminderModels.getReminderbyID(reminder_id)
        if(reminder)
            return reminder
        return "There is no reminder with this id"
    }catch(err){
        console.error(err.message, err.code)
    }
}

const reminderByNote = async(note_id)=>{
    try{
        const reminder = await reminderModels.getReminderbyNote(note_id)
        if(reminder)
            return reminder
        return "No note attached to this reminder"
    }catch(err){
        console.error(err.message, err.code)
    }
}

module.exports={
    reminderID,
    reminderByNote
}