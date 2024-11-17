import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    return NextResponse.json(error);
  }

  return id;
}
