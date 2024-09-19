const pool = require('../config/db.config')

const getNoteById = async(note_id)=>{
    try{
        console.log(note_id)
        const [rows] = await pool.query('SELECT * FROM notes WHERE note_id =?', [note_id])
        if(rows.length)
            return rows[0]
        return null
    }catch(err){
        console.error('error in getting notes', err)
        throw err
    }
}

const getNoteByCreation_date = async(note_creation_date)=>{
    try{
        console.log(note_creation_date)        
        const [rows] = await pool.query('SELECT * FROM notes WHERE note_creation_date =?',[note_creation_date])
        if(rows.length)
            return rows
        return null
    }catch(err){
        console.error('error in getting notes', err)
        throw err
    }
}

const getNotesIDByuserID = async(user_id)=>{
    try{
        const [rows] = await pool.query('SELECT note_id FROM note_users WHERE users_id =?',[user_id])
        if(rows.length)
            return rows
        return null
    }catch(err){
        console.error('error in getting notes', err)
        throw err
    }
}
module.exports={
    getNoteById,
    getNoteByCreation_date,
    getNotesIDByuserID
}