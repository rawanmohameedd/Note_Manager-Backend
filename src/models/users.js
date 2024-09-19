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

module.exports = {
    getUserById,
};
