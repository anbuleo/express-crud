import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


const dbName = process.env.dbName
const dbUrl = process.env.dbUrl
try {
    mongoose.connect(`${dbUrl}/${dbName}`)
    console.log("database connected Successfully")
} catch (error) {
    console.log(error)
    
}


export default mongoose