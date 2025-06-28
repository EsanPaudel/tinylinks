import User from "@/models/User";
import connectDB from "@/lib/mongo";
import bcrypt from "bcrypt"
import mongoose from "mongoose";

export async function POST(req) {
  const {name,email,password} = await req.json();
  await connectDB()

  const existingUser = await User.findOne({email})
  if(existingUser){
    return new Response(JSON.stringify({error:'Email already exists'}),{status:400})
  }
  const hashed = await bcrypt.hash(password,10)
  await User.create({name,email,password:hashed});
  return new Response(JSON.stringify({success:'User Created'}),{status:201})
}