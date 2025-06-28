import connectDB from "@/lib/mongo";
import Url from "@/models/Url";
import { redirect } from "next/navigation";

export default async function redirectPage({params}) {
  const {shortId} = params 
  await connectDB()

  const urlDoc = await Url.findOne({shortId})
  if(!urlDoc) return <div>URL not Found</div>

  urlDoc.clicks += 1
  urlDoc.clickHistory.push(new Date())
  await urlDoc.save()

  redirect(urlDoc.orginalUrl)
}