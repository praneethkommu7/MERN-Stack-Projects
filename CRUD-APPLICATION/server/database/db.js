import mongoose from "mongoose"

const Connection = async (username, password)=>{
    const URL=`mongodb://${username}:${password}@ac-7qtnhix-shard-00-00.zbvrwz9.mongodb.net:27017,ac-7qtnhix-shard-00-01.zbvrwz9.mongodb.net:27017,ac-7qtnhix-shard-00-02.zbvrwz9.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-nza599-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connecting DataBase ',error)
    }
}

export default Connection;