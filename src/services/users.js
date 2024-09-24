const user = require('../models/users')

const getUser = async (id) => {
    try {
        const userData = await user.getUserById(id)
        if (userData)
            return userData
        else
            return 'There is no user with this id'
    } catch (error) {
        console.error('Error in route:', error);
        return res.status(500).send({ error: "Can't get to this user" });    }
}

const addNote = async({user_id, note_title, note_content, note_status})=>{
    try{
        const noteToAdd = await user.addNoteUser({user_id, note_title, note_content, note_status})
        if(!noteToAdd)
            return "failed to add a note"
        return noteToAdd
    }catch{
        return "Couldn't add this note"
    }
}

const deleteNote = async(note_id)=>{
    try{
        const notedeleted = await user.deleteNoteUser(note_id)
        if (notedeleted)
            return "deleted successfully"
        return "Failed to delete"
    }catch{
        return "Couldn't delete this note"
    }
}

module.exports = {
    getUser,
    addNote,
    deleteNote
}