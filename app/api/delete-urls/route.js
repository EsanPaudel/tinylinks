import connectDB from "@/lib/mongo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Url from "@/models/Url";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  await connectDB();
  const { id } = await req.json();
  if (!id) throw new Error("Id not found while deleting url");
  const urlDoc = await Url.findOne({ _id: id, userId: session.user.id });
  if (!urlDoc) throw new Error("URL not found");
  await Url.deleteOne({ _id: id });
  return NextResponse.json({ message: "URL deleted successfully" });
}
