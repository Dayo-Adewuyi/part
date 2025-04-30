import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function POST(request: NextRequest) {
  console.log('API route handler called');
  
  try {
    const body = await request.json();
    console.log('Received data:', body);
    
    const { fullName, whatsappNumber, email } = body;

    if (!fullName || !whatsappNumber || !email) {
      console.log('Validation failed: Missing fields');
      return NextResponse.json(
        { message: 'All fields are required', success: false },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email');
      return NextResponse.json(
        { message: 'Invalid email format', success: false },
        { status: 400 }
      );
    }

    console.log('Connecting to MongoDB');
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'waitlist_db');

    const existingUser = await db.collection('waitlist').findOne({ email });
    if (existingUser) {
      console.log('Email already exists:', email);
      return NextResponse.json(
        { message: 'This email is already on our waitlist', success: false },
        { status: 409 }
      );
    }

    console.log('Inserting new waitlist entry');
    const result = await db.collection('waitlist').insertOne({
      fullName,
      whatsappNumber,
      email,
      createdAt: new Date(),
    });
    
    console.log('Insertion result:', result);

    return NextResponse.json(
      { message: 'Successfully added to waitlist', success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { message: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}