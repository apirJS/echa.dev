import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/database/db';
import { comments } from '@/database/schema';

export async function GET(): Promise<NextResponse<unknown>> {
  try {
    const data = await db.select().from(comments);
    const body = {
      ok: true,
      data: data,
    };
    return new NextResponse(JSON.stringify(body), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    return new NextResponse(JSON.stringify({ ok: false, data: [] }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse<unknown>> {
  const body: Omit<typeof comments.$inferInsert, 'id' | 'createdAt'> = await req.json();

  try {
    const comment = await db.insert(comments).values(body);
    return new NextResponse(JSON.stringify({ ok: true, data: [comment] }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.log(e)
    return new NextResponse(JSON.stringify({ ok: false, data: [] }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
