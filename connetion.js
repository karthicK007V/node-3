const {MongoClient}=require("mongodb");


module.exports={
    selectdb:{},
   async  connect(){
        try{
           const clint=await MongoClient.connect(process.env.MONGODB_URL);
           this.selectdb=clint.db('guvi')
           console.log(this.selectdb);

        }catch(err){
            console.error(err);
        }
    }
}