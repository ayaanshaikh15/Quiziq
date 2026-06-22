import mongoose from 'mongoose'
const Dbconnect = async()=>{
    const dbURL=process.env.DB_URL
    try{
     const url =await mongoose.connect(dbURL)
     console.log("Mongo connected successfully ")
    }catch(err){
        console.log("Error while connecting to database : ",err)
    }
}
export default Dbconnect;