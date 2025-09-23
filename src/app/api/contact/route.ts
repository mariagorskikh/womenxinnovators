import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, type } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    const collection = await getCollection('contacts');

    // Insert new contact form entry
    const result = await collection.insertOne({
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      type: type || 'general', // general, partnership, volunteer, etc.
      createdAt: new Date(),
      status: 'new'
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

