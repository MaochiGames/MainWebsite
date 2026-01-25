"use server"

import nodemailer from "nodemailer"

type FormState = {
  status: "idle" | "success" | "error"
  message: string
}

const MAX_MESSAGE_LENGTH = 5000

export async function sendContactEmail(_prevState: FormState, formData: FormData): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." }
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { status: "error", message: "Message is too long." }
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO,
    SMTP_SECURE,
  } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
    return { status: "error", message: "Email service is not configured." }
  }

  const port = Number(SMTP_PORT)
  const secure = SMTP_SECURE === "true" || port === 465

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO,
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(
        /\n/g,
        "<br />"
      )}</p>`,
    })

    return { status: "success", message: "Thanks! Your message has been sent." }
  } catch (error) {
    console.error("Failed to send contact email", error)
    return { status: "error", message: "Something went wrong sending your message." }
  }
}
