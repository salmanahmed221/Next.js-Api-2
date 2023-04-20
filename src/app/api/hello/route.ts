import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has('name')) {
    const name = url.searchParams.get('name');
    return NextResponse.json({ message: 'Hello from ' + name });
  } else {
    return new NextResponse('Please send your name in search Params');
  }
}
