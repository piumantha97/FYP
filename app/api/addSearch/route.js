import {connectMongoDB} from "@/lib/mongodb";
import Search from "@/models/addSearch";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { age, location } = await request.json();
  await connectMongoDB();
  await Search.create({ age, location });
  return NextResponse.json({ message: "Search Created" }, { status: 201 });
}



