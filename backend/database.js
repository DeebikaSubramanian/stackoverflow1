const mongoose=require("mongoose")

const url="mongodb://Deebika:Karthish_06@cluster0-shard-00-00.pfqdk.mongodb.net:27017,cluster0-shard-00-01.pfqdk.mongodb.net:27017,cluster0-shard-00-02.pfqdk.mongodb.net:27017/stackoverflow?ssl=true&replicaSet=atlas-poowox-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect=()=>
{
    mongoose.connect(url).then((res)=>console.log("MongoDB connected"))
      .catch((error)=>console.log("Error:",error)) 
}