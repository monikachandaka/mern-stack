const Students=require("../model/StudentModel");
// add students 
const addStudent=(req,res)=>{
try{
     const {name,rollNo,branch,phone,email,address}=req.body;
     const newStudent={
        name:name,
        rollNo:rollNo,
        branch:branch,
        phone:phone,
        email:email,
        address:address,
     };
     Students.insertOne(newStudent);
     res.status(200).json({message:"student added Successfully"});

}
catch(err){
 res.status(200).json({message:"failed to add Successfully"})
 console.log(err);
}
};







// get all students 
// get students based on ID 
// delete student 
// update studentDetails 
// update only phone number 
module.exports=addStudent;