import connectDB from "@/lib/mongo";
import { getServerSession } from "next-auth";
import Url from "@/models/Url";
import { authOptions } from "@/lib/auth";
import { nanoid } from "nanoid";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const {orginalUrl} = await req.json();
  if (!orginalUrl) return new Response("Missing Url", { status: 400 });
  await connectDB();
  const shortId = nanoid(6);
  const newUrl = await Url.create({
    orginalUrl,
    shortId,
    userId: session.user.id,
  });
  const shortUrl = `${process.env.NEXT_PUBLIC_URL}/${shortId}`;
  return new Response(JSON.stringify({shortUrl}),{status:200});
}
