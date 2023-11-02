import mongoose from 'mongoose'
import DB from '../common/dbConfig.js'

try {
    mongoose.connect(`${DB.dbUrl}/${DB.dbName}`)
    console.log("database connected Successfully")
} catch (error) {
    console.log(error)
    
}


export default mongoose