import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 4000;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const emailUser = (process.env.EMAIL_USER || "").trim();
  const emailPass = (process.env.EMAIL_APP_PASSWORD || "")
    .replace(/\s+/g, "")
    .trim();
  const contactTo = process.env.CONTACT_TO || emailUser;

  if (!emailUser || !emailPass || !contactTo) {
    return NextResponse.json(
      { error: "Mail service is not configured." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (
    name.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    message.length > MAX_MESSAGE
  ) {
    return NextResponse.json(
      { error: "Input exceeds allowed length." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${emailUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      `,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
