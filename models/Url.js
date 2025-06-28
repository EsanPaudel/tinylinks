
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  orginalUrl:{type:String,required:true},
  shortId:{type:String,required:true,unique:true},
  userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
  createdAt:{type:Date,default: Date.now},
  clicks:{type:Number,default:0},
  clickHistory:[{type:Date}]

})

export default mongoose.models.Url || mongoose.model("Url",urlSchema)