import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const apiKey = process.env.EMAILOCTOPUS_API_KEY;
    const listId = process.env.EMAILOCTOPUS_LIST_ID;

    if (!apiKey || !listId) {
      console.error("Missing EmailOctopus credentials");
      return NextResponse.json({ error: "Newsletter service not configured" }, { status: 500 });
    }

    // Add subscriber to EmailOctopus
    const response = await fetch(`https://emailoctopus.com/api/1.6/lists/${listId}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: email,
        status: "SUBSCRIBED",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle duplicate email (already subscribed)
      if (data.error?.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return NextResponse.json({ message: "You're already subscribed!" }, { status: 200 });
      }

      console.error("EmailOctopus API error:", data);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed!", contact: data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
