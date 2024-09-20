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

const getNotesByuserID = async(user_id)=>{
    try{
        const [rows] = await pool.query(`SELECT n.note_title , n.note_status , n.note_content , n.note_creation_date
                                        FROM notes n join note_users u where u.users_id = ? AND u.note_id = n.note_id;`,[user_id])
        if(rows.length)
            return rows
        return null
    }catch(err){
        console.error('error in getting notes', err)
        throw err
    }
}

const getNotesByCategory = async(category_id)=>{
    try{
        const [rows] = await pool.query(`SELECT n.note_title , n.note_status , n.note_content , n.note_creation_date
                                        FROM notes n join note_category c where c.category_id = ? AND c.note_id = n.note_id;`,[category_id])
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
    getNotesIDByuserID, 
    getNotesByuserID,
    getNotesByCategory
}