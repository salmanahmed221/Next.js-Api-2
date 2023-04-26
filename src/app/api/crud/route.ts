import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    From: 'Salman',
    Greeting: 'Greeting From Pakistan',
    RequestType: 'GET',
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: req.name,
      Message: 'All well here',
      RequestType: 'POST',
    });
  } else {
    return new NextResponse('Please send your name in the body');
  }
}

export async function PUT(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: req.name,
      Message: 'This is a updated greeting',
      RequestType: 'PUT',
    });
  } else {
    return new NextResponse('Please include your name in the PUT request');
  }
}

// There is also require of body and id in put to update data

export async function DELETE(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: 'Zia',
      Message: 'I have deleted the greetings',
      RequestType: 'DELETE',
    });
  } else {
    return new NextResponse('Please include your name in the DELETE request');
  }
}

// There is no need of body in delete method we delete it using id but if we run this delete function its does'nt works it crash
