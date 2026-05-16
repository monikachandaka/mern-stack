const mongoose=require("mongoose");


const studentSchema=new mongoose.Schema({
name:{type:String,requird:true},
rollNo:{type:String,unique:true,required:true},
branch:{type:String,required:true},
phone:{type:Number,unique:true,required:true,length:10},
email:{type:String,unique:true,required:true},
address:{type:String, required:true}
},
{timeStamps:true}
);

const studentModel=mongoose.model("student",studentSchema)

module.exports = studentModel;