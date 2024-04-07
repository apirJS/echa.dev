import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/database/db';
import { comments } from '@/database/schema';

export async function GET(): Promise<NextResponse<unknown>> {
  try {
    const data = await db.select().from(comments);
    const body = {
      comments: data,
      ok: true,
    };
    return new NextResponse(JSON.stringify(body), { status: 200 });
  } catch (e) {
    return new NextResponse(JSON.stringify({ ok: false, data: [] }), { status: 500 });
  }
}


export async function POST(req: NextRequest): Promise<NextResponse<unknown>> {
  const { userId, content }: Omit<typeof comments.$inferInsert, "id"> = await req.json()

  try {
    return new NextResponse(JSON.stringify({ ok: true}), { status: 200 });
  } catch (e) {
    return new NextResponse(JSON.stringify({ ok: false }), { status: 500 });
  }
}