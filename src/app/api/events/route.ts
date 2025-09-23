import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { name, email, eventType, chapter, company, role, dietaryRestrictions, interests } = await request.json();

    // Basic validation
    if (!name || !email || !eventType) {
      return NextResponse.json(
        { error: 'Name, email, and event type are required' },
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

    const collection = await getCollection('eventRegistrations');

    // Check if email already registered for this event type
    const existingEntry = await collection.findOne({ 
      email, 
      eventType,
      status: { $ne: 'cancelled' }
    });
    
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Already registered for this event type' },
        { status: 409 }
      );
    }

    // Insert new event registration
    const result = await collection.insertOne({
      name,
      email,
      eventType, // 'hacker-house', 'networking', 'mentor-matching', etc.
      chapter: chapter || '',
      company: company || '',
      role: role || '',
      dietaryRestrictions: dietaryRestrictions || '',
      interests: interests || [],
      createdAt: new Date(),
      status: 'registered'
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully registered for event!',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error registering for event:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

