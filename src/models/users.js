const pool = require('../config/db.config.js');

const getUserById = async (id) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [id]);
        console.log(rows);
        if (rows.length) {
            return rows;
        }
        return null;
    } catch (err) {
        console.error('Error in getUserById:', err);
        throw err;
    }
};


const addNoteUser = async ({user_id, note_title, note_content, note_status})=>{
    try{
        const [result] = await pool.query(`INSERT INTO notes (note_title, note_content, note_status, note_creation_date) 
            VALUES (?, ?, ? , CURRENT_TIMESTAMP)`,[note_title, note_content, note_status])

        if (result){
            console.log(result.insertId)
            const id = result.insertId
            const note_users = await pool.query(`INSERT INTO note_users (note_id, users_id)
                    VALUES(?,?)`,[id,user_id])
            if (note_users)
                console.log(true)
                
            console.log("can't add to note_users")
            return false 
        }
        console.log( "can't add to notes")
        return false 
    }catch(err){
        console.error('Error Inserting this note',err.message)
        return err.message
    }
}

const deleteNoteUser = async (note_id)=>{
    try{
        const deletedNote = await pool.query(`DELETE FROM notes WHERE note_id = ?`,[note_id])
        if (deletedNote){
            const deleteNoteId = await pool.query(`DELETE FROM note_users WHERE note_id = ?`,[note_id])
            if (deleteNoteId)
                return true
        }
        console.log('can not delete this note')
        return false
    }catch(err){
        console.error('Error deleting this note',err.message)
        return err.message
    }
}
module.exports = {
    getUserById,
    addNoteUser,
    deleteNoteUser
};
