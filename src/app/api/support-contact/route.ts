import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface SupportBody {
  email?: string;
  message?: string;
  turnstileToken?: string;
}

async function verifyTurnstileToken(
  token: string,
  remoteIp: string | null,
): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  const formData = new URLSearchParams();
  formData.append("secret", secretKey);
  formData.append("response", token);
  if (remoteIp) formData.append("remoteip", remoteIp);

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      console.error("Turnstile verification failed with non-200 response");
      return false;
    }

    const data = (await response.json()) as { success?: boolean };
    return !!data.success;
  } catch (error) {
    console.error("Error verifying Turnstile token:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SupportBody;
    const { email, message, turnstileToken } = body;

    if (!email || !message || !turnstileToken) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    const ipHeader =
      request.headers.get("CF-Connecting-IP") ||
      request.headers.get("x-forwarded-for");
    const remoteIp = ipHeader?.split(",")[0].trim() || null;

    const isValid = await verifyTurnstileToken(turnstileToken, remoteIp);
    if (!isValid) {
      return NextResponse.json(
        { error: "Verification failed. Please refresh and try again." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "everett@southwick.dev",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailContent = `
      Email: ${email}
      Message: ${message}
    `;

    const mailOptions = {
      from: "support@southwick.dev",
      to: "everett@southwick.dev",
      subject: `SW Software Support Request from ${email}`,
      text: emailContent,
      html: `
        <h2>SW Software LLC - New Support Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling support contact:", error);
    return NextResponse.json(
      { error: "Failed to send support request" },
      { status: 500 },
    );
  }
}


