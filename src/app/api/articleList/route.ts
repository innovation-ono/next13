import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  let { data, error } = await supabase.from("posts").select("*");

  // Netskope接続してると失敗する........
  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
