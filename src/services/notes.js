const notemodels = require('../models/notes')

const getNote = async(note_id)=>{
    try{
        const note = await notemodels.getNoteById(note_id)
        if(note)
            return note
        return 'No Note with this id'
    }catch (error) {
        console.error('error in fetch note details', err)
        throw error   
    }
} 

const getNotebyDate = async(note_creation_date)=>{
    try{
        const note = await notemodels.getNoteByCreation_date(note_creation_date)
        if(note)
            return note
        return 'No Note in this date'
    }catch (error) {
        console.error('error in fetch note details', err)
        throw error   
    }
}

const getNotesIDbyuserID = async(user_id)=>{
    try{
        const note = await notemodels.getNotesIDByuserID(user_id)
        if(note)
            return note
        return 'No Notes id for this user'
    }catch (error) {
        console.error('error in fetch note id', err)
        throw error   
    }
}

const getNotesbyuserID = async(user_id)=>{
    try{
        const note = await notemodels.getNotesByuserID(user_id)
        if(note)
            return note
        return 'No Notes for this user'
    }catch (error) {
        console.error('error in fetch notes', err)
        throw error   
    }
}
module.exports={
    getNote,
    getNotebyDate,
    getNotesIDbyuserID,
    getNotesbyuserID
}