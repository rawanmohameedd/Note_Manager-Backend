const pool = require('../config/db.config')

const getReminderbyID = async (reminder_id) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM reminder WHERE reminder_id=?`, [reminder_id])

        if (rows.length)
            return rows
        return null
    } catch (err) {
        console.error('Error in getv reminders', err.message)
    }
}

const getReminderbyNote = async (note_id) => {
    try {
        const [rows] = await pool.query(`select r.reminder_name , r.reminder_description, r.reminder_creation_date,
                    r.reminder_type , r.reminder_creator from reminder r join note_reminder n  where 
                    n.note_id = ? and n.reminder_id = r.reminder_id;`, [note_id])

        if (rows.length)
            return rows
        return null
    } catch (err) {
        console.error('Error in get reminders', err.message)
    }
}

module.exports={
    getReminderbyID,
    getReminderbyNote
}