import connectDB from "@/lib/mongo";
import Url from "@/models/Url";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export  async function GET() {
  const session = await getServerSession(authOptions)
  if(!session) return new NextResponse("Unauthorized",{status:401})
  await connectDB()
  const urls = await Url.find({userId:session.user.id}).sort({createdAt:-1})

  return NextResponse.json({urls})
}