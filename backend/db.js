const mongoose = require('mongoose');
const mongoURI='mongodb+srv://utkarshmanu1807:foodato123@cluster0.xpcoyh8.mongodb.net/?retryWrites=true&w=majority'
const mongoDB =async()=>{
await mongoose.connect(mongoURI,{ useNewUrlParser: true},(err,result)=>{
   if(err) console.log("---",err)
   else{
    console.log("connected");
    const fetched_data = mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray( async function(err,data){
       // if(err) console.log(err);
        //else {
           // global.food_items =data;
            /*console.log(global.food_items)*/
        //}
        const foodCategory=await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function(err,catData){
            if (err) console.log(err);
            else {
                global.food_items=data;
                global.food_items=catData;
            }
        })
    })
   }
});
}

module.exports = mongoDB; 