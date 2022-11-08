const express=require("express");
const router=express.Router();
const mongo=require('../connetion');
const {ObjectId}=require("mongodb")



router.get("/get",async(req,res,next)=>{
  const response =  await mongo.selectdb.collection('student').find().toArray();
  console.log(response);
    res.send(response);
 
    
})
router.post("/create",async(req,res,next)=>{
    try{
    const response=await mongo.selectdb.collection('student').insertOne(req.body);
    console.log(response);
    res.send(response);
    }catch(err){
        console.error(err);
        res.status(500).send(err); 
      }
    
})
// router.post("/assign/:id",async(req,res,next)=>{
//     const _id=req.params.id;
//    const response= await mongo.selectdb.collection("student").aggregate([
//         {
//         $lookup:
//         {
//             from: 'mentor',
//          localField: "mentor-id",
//          foreignField: 'id',
//          as: 'mentordetails'

//         }
//     }
//     ]).toArray();
// console.log(response);
// res.send(response)
// })
// router.put("/update/:id",async(req,res,next)=>{
//     const id=req.params.id;
//    const response= await mongo.selectdb.collection("student"). findOneAndUpdate({_id:ObjectId(id)},{set :{...req.body}},{returnDocument :"after"})
   
   
// //    aggregate([
// //         {
// //         $lookup:
// //         {
// //             from: 'mentor',
// //          localField: "mentor-id",
// //          foreignField: 'id',
// //          as: 'mentordetails'

// //         }
// //     }
// //     ]).toArray();
// console.log(response);
// res.send(response)
// })
module.exports=router;