const express=require("express");
const router=express.Router();
const mongo=require('../connetion');

router.get("/get",async(req,res,next)=>{
    const response =  await mongo.selectdb.collection('mentor').find().toArray();
    console.log(response);
      res.send(response);
   
      
  })
  router.post("/create",async(req,res,next)=>{
      try{
      const response=await mongo.selectdb.collection('mentor').insertOne(req.body);
      console.log(response);
      res.send(response);
      }catch(err){
          console.error(err);
          res.status(500).send(err); 
        }
      
  })
  router.post("/assign/:id",async(req,res,next)=>{
    const _id=req.params.id;
   const response= await mongo.selectdb.collection("mentor").aggregate([
        {
        $lookup:
        {
            from: 'student',
         localField: "student-id",
         foreignField: 'id',
         as: 'studentdetails'

        }
    }
    ]).toArray();
console.log(response);
res.send(response)
})
router.get("/find",async(req,res,next)=>{
    const response =  await mongo.selectdb.collection('student').find({}, { projection: { _id: 0, name: 1, age: 1 ,subject: 1} }).toArray();
    console.log(response);
      res.send(response);
   
      
  })

module.exports=router;