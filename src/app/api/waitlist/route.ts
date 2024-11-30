import { NextResponse } from 'next/server';
import { waitlistSchema } from '@/lib/schemas/waitlist';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = waitlistSchema.parse(body);

    // Here you would typically send this data to your API
    console.log('Waitlist submission:', data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[WAITLIST_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}