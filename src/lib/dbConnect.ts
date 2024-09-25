import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}
const connection: ConnectionObject = {}
async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("connected")
        return
    }
    try{
        const db = await mongoose.connect(process.env.DATABASE_URL || "")
        connection.isConnected = db.connections[0].readyState
    }catch(err){
        console.log("DB connection failed: ",err);
        process.exit()
    }
}
export default dbConnect