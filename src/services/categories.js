const categoriesModels = require('../models/categories')

const getCategoryID = async(category_id) =>{
    try{
        const category = await categoriesModels.getCategorybyID(category_id)
        if(category)
            return category
        return 'There is no category with this id'
    } catch(err){
        console.error(err.message , "Can't get to categories")
    }
}

const getCategorybyDate = async(category_creation_date) =>{
    try{
        const categories = await categoriesModels.getCategorybydate(category_creation_date)
        if(categories)
            return categories
        return 'There are no categories created before this date'
    } catch(err){
        console.error(err.message , "Can't get to categories")
    }
}

module.exports={
    getCategoryID,
    getCategorybyDate
}