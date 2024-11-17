import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    ID: 1,
    description:
      "テスト用のAPIです!app/api/route.tsにasyncでGETメソッドを定義しています。",
    skills: [
      "TypeScript/Next.js",
      "SQL",
      "PHP/Laravel",
      "Vercel",
      "Go",
      "Lambda",
      "CloudWatch",
    ],
  });
}
