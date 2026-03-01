import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    console.log("🚨 NEW CAL.COM BOOKING RECEIVED 🚨");
    console.log("Event Type:", payload.triggerEvent);
    console.log("Attendee Data:", payload.payload);

    // TODO: Add Webhook Secret verification here later
    // const signature = request.headers.get('cal-signature');

    return NextResponse.json({ message: "Webhook caught successfully" }, { status: 200 });
    
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}
