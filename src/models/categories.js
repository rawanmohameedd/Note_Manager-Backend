const pool = require ('../config/db.config')

const getCategorybyID = async (category_id)=>{
    try{
        const [rows] = await pool.query(` SELECT * FROM categories WHERE category_id=?`,[category_id])
        if(rows.length)
            return rows
        return null
    }catch(err){
        console.error('Error get categotries', err.message)
        console.error(err.code)
    }
}

const getCategorybydate = async (category_creation_date)=>{
    try{
        const [rows] = await pool.query(` SELECT * FROM categories WHERE DATE(category_creation_date)<?`,[category_creation_date])
        if(rows.length)
            return rows
        return null
    }catch(err){
        console.error('Error get categotries', err.message)
        return err.message
    }
}

module.exports={
    getCategorybyID,
    getCategorybydate
}