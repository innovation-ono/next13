import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, content } = await req.json();
  console.log(title, content);
  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        title: title,
        content: content,
        createdAt: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    console.log(error);
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
