import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, role, interests } = await request.json();

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const collection = await getCollection('waitlist');
    
    // Check if email already exists
    const existingEntry = await collection.findOne({ email });
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered in waitlist' },
        { status: 409 }
      );
    }

    // Insert new waitlist entry
    const result = await collection.insertOne({
      name,
      email,
      company: company || '',
      role: role || '',
      interests: interests || [],
      createdAt: new Date(),
      status: 'pending'
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist!',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

