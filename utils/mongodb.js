import mongoose from "mongoose";

async function connectWithMongoDB(url){
    return mongoose.connect(url);
}

export default connectWithMongoDB;